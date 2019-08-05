figma.showUI(__html__, { width: 800 });

figma.listAvailableFontsAsync().then(fonts => {
  figma.ui.postMessage(fonts);
});

figma.ui.onmessage = msg => {
  if (msg.type === "create-rectangles") {
  }

  figma.closePlugin();
};
