window.CMS_MANUAL_INIT = true;

window.initCMS = function() {
  window.CMS.init({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
        identity_url: "https://osservatorio-parlamento-e-corti.netlify.app/.netlify/identity",
        gateway_url: "https://osservatorio-parlamento-e-corti.netlify.app/.netlify/git/github",
        commit_messages: {
          create: 'Create {{collection}} "{{slug}}"',
          update: 'Update {{collection}} "{{slug}}"',
          delete: 'Delete {{collection}} "{{slug}}"',
          uploadMedia: 'Upload "{{path}}"',
          deleteMedia: 'Delete "{{path}}"'
        }
      },
      load_config_file: false,
      media_folder: "static/images/uploads",
      public_folder: "/images/uploads",
      locale: 'it',
      collections: [
        {
          name: "news",
          label: "News",
          folder: "content/news",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          fields: [
            {label: "Title", name: "title", widget: "string"},
            {label: "Publish Date", name: "date", widget: "datetime"},
            {label: "Description", name: "description", widget: "text"},
            {label: "Featured Image", name: "featured_image", widget: "image"},
            {label: "Categories", name: "categories", widget: "list"},
            {label: "Body", name: "body", widget: "markdown"}
          ]
        },
        {
          name: "primo-piano",
          label: "Primo Piano",
          folder: "content/primo-piano",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          fields: [
            {label: "Title", name: "title", widget: "string"},
            {label: "Publish Date", name: "date", widget: "datetime"},
            {label: "Description", name: "description", widget: "text"},
            {label: "Featured Image", name: "featured_image", widget: "image"},
            {label: "Categories", name: "categories", widget: "list"},
            {label: "Body", name: "body", widget: "markdown"}
          ]
        },
        {
          name: "parlamento",
          label: "Parlamento",
          folder: "content/parlamento",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          fields: [
            {label: "Title", name: "title", widget: "string"},
            {label: "Publish Date", name: "date", widget: "datetime"},
            {label: "Description", name: "description", widget: "text"},
            {label: "Featured Image", name: "featured_image", widget: "image"},
            {label: "Categories", name: "categories", widget: "list"},
            {label: "Body", name: "body", widget: "markdown"}
          ]
        },
        {
          name: "corti",
          label: "Corti",
          folder: "content/corti",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          fields: [
            {label: "Title", name: "title", widget: "string"},
            {label: "Publish Date", name: "date", widget: "datetime"},
            {label: "Description", name: "description", widget: "text"},
            {label: "Featured Image", name: "featured_image", widget: "image"},
            {label: "Categories", name: "categories", widget: "list"},
            {label: "Body", name: "body", widget: "markdown"}
          ]
        }
      ]
    }
  });
}; 