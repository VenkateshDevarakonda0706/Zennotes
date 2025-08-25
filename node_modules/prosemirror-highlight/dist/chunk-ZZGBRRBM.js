// src/hast.ts
import { Decoration } from "prosemirror-view";
function fillFromRoot(decorations, node, from) {
  for (const child of node.children) {
    from = fillFromRootContent(decorations, child, from);
  }
}
function fillFromRootContent(decorations, node, from) {
  if (node.type === "element") {
    const to = from + getElementSize(node);
    const { className, ...rest } = node.properties || {};
    decorations.push(
      Decoration.inline(from, to, {
        class: className ? Array.isArray(className) ? className.join(" ") : String(className) : void 0,
        ...rest,
        nodeName: node.tagName
      })
    );
    return to;
  } else if (node.type === "text") {
    return from + node.value.length;
  } else {
    return from;
  }
}
function getElementSize(node) {
  let size = 0;
  for (const child of node.children) {
    size += getElementContentSize(child);
  }
  return size;
}
function getElementContentSize(node) {
  switch (node.type) {
    case "element":
      return getElementSize(node);
    case "text":
      return node.value.length;
    default:
      return 0;
  }
}

export {
  fillFromRoot
};
