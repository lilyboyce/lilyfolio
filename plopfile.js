module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Generate a JSX component in src/components",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}.jsx",
        templateFile: "src/templates/component.hbs",
      },
      {
        type: "append",
        path: "src/components/index.js",
        templateFile: "src/templates/import.hbs",
      },
    ],
  });
  plop.setGenerator("section", {
    description: "Generate a JSX layout in src/sections",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What would you like to name the layout?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/sections/{{name}}.jsx",
        templateFile: "src/templates/component.hbs",
      },
      {
        type: "append",
        path: "src/sections/index.js",
        templateFile: "src/templates/import.hbs",
      },
    ],
  });
};
