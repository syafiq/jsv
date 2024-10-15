    const processEvent = (data) => {
        var eventId = CryptoJS.MD5(JSON.stringify(data)).toString();
        if (document.getElementById(eventId)) return; // duplicate

        var sigId = slugify(data.category);
        switch (true) {
          case sigId.startsWith("cve-"):
            sigId = "cves";
            break;
          case sigId.startsWith("common-web-attack"):
            sigId = "common-web-attacks";
            break;
          default:
             break;
        }

        document.getElementById(sigId) == null ? createSignature(data.category) : true;
        var sigMenuItem = document.getElementById(sigId).getElementsByClassName('menu-item')[0];
        sigMenuItem.setAttribute('data-badge', parseInt(sigMenuItem.getAttribute('data-badge') || 0) + 1);
        sort(document.getElementById('signatures'));

        var row = document.getElementById('messages').insertRow(0);
        row.classList.add('log', sigId);
        row.id = eventId;
        row.insertCell(0).innerHTML = `<td class="date"><span class="datetime" title="${new Date().toLocaleString}">${new Date().toLocaleTimeString()}</span></td>`;
        row.insertCell(1).innerHTML = `<td class="category-name"><strong>${data.category}</strong></td>`;
        row.insertCell(2).innerHTML = `<td class="element"><div>${data.element}</pre></div></td>`;
        row.insertCell(3).innerHTML = `<td class="matches"><strong>${data[data.element]}</strong></td>`;
        row.insertCell(4).innerHTML = `<td class="log-line"><div><pre>${JSON.stringify(data)}</pre></div></td>`;
        settings.matchesCount.textContent = `${document.getElementsByClassName('log').length} threats`;

        if (settings.activeSignatures.length > 0 && !settings.activeSignatures.includes(sigId)) row.style.display = 'none';
    };