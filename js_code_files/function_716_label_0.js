!1;null!=H&&(N="1"==k.getCurrentCellStyle(H).treeMoving);return N}function m(H){var N=!1;null!=H&&(H=n.getParent(H),N=k.view.getState(H),N="tree"==(null!=N?N.style:k.getCellStyle(H)).containerType);return N}function t(H){var N=!1;null!=H&&(H=n.getParent(H),N=k.view.getState(H),k.view.getState(H),N=null!=(null!=N?N.style:k.getCellStyle(H)).childLayout);return N}function y(H){H=k.view.getState(H);if(null!=H){var N=k.getIncomingTreeEdges(H.cell);if(0<N.length&&(N=k.view.getState(N[0]),null!=N&&(N=N.absolutePoints,