import Ember from 'ember';

/* Using static data for now. GUID will load from server */
const Layer = Ember.Object.extend();


let layers = Ember.A([
    Layer.create({
        sectionHeader: 'Title',
        showInMenu: true,
        component: 'layer-title',
        settings: {
            component: 'layer-title-settings',
            backgroundImage: 'http://localhost:4200/img/bg.png',
            properties: {
                showNavigation: true,
                showTitle: true,
                showInNavigation: false,
                h1Size: null,
                alignment: 'right',
                lead: 'Some lead text',
                themeId: 3,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Advanced',
        showInMenu: true,
        component: 'layer-advanced',
        content:"<h3>Click to edit the Advanced Layer</h3><div>Mauris imperdiet <strong>ligula a mauris porttitor ultricies.</strong> Praesent ut fringilla orci. Proin feugiat auctor augue non rutrum. Sed ac metus in augue dignissim malesuada non et sem. Pellentesque ut metus odio. Integer fringilla nulla id leo consequat, a sollicitudin sapien fringilla. Fusce vestibulum malesuada nisl. Fusce augue leo, tempus eget mattis vel, imperdiet at nulla.</div>",
        settings: {
            component: 'layer-advanced-settings',
            properties: {
                sectionTitle:"Info advanced",
                showInNavigation: true,
                themeId: 3,

            }
        }
    }),
    Layer.create({
        sectionHeader: 'Info',
        showInMenu: true,
        component: 'layer-info',
        settings: {
            component: 'layer-info-settings',
            properties: {
                sectionTitle:"Info Title",
                showInNavigation: true,
                showDescription: true,
                showContributors: true,
                showBibliographicContributors: false,
                showAffiliatedInstitutions: true,
                themeId: 2,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Image-Text',
        showInMenu: true,
        component: 'layer-image-text',
        settings: {
            component: 'layer-image-text-settings',
            properties: {
                sectionTitle:"Image here ",
                showInNavigation: true,
                imageUrl: 'http://localhost:4200/img/sample.jpg',
                text: 'Lorem ipsum dolor sit amet',
                imageOnLeft: true,
                textAlignment: 'left',
                themeId: 4,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Link',
        showInMenu: true,
        component: 'layer-link',
        settings: {
            component: 'layer-link-settings',
            properties: {
                sectionTitle:"Link Title",
                showInNavigation: true,
                sectionLinkDescription:"this link goes to a place",
                sectionLink:"www.example.com",
                themeId: 5,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Image',
        showInMenu: false,
        component: 'layer-image',
        settings: {
            component: 'layer-image-settings',
            properties: {
                height: 500,
                url: 'http://localhost:4200/img/sample.jpg',
                themeId: 3,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Download',
        showInMenu: true,
        component: 'layer-file',
        settings: {
            component: 'layer-file-settings',
            description: '',
            properties: {
                sectionTitle:"Download this file",
                showFileviewer: true,
                downloadLink: '',
                showInNavigation: true,
                themeId: 6,
            }
        }
    }),
    Layer.create({
        sectionHeader: 'Wiki example',
        showInMenu: true,
        component: 'layer-wiki',
        settings: {
            component: 'layer-wiki-settings',
            wikiId: '',
            properties: {
                sectionTitle:"Wiki example",
                showInNavigation: true,
                addShowMore: false,
                themeId: 5,
            }
        }
    })
]);


let themes = [
    {
        id: 1,
        name: "dark",
        type: "dark",
        background: '#9e9e9e',
        color: '#f8f8f8'
    },
    {
        id: 2,
        name: "light",
        type: "light",
        background: '#eeeeee',
        color: '#333333'
    },
    {
        id: 3,
        name: "green",
        type: "dark",
        background: '#009688',
        color: '#ebebeb',
    },
    {
        id: 4,
        name: "blue",
        type: "dark",
        background: '#00BCD4',
        color: '#ffffff'
    },
    {
        id: 5,
        name: "white",
        type: "light",
        background: '#ffffff',
        color: '#333333'
    },
    {
        id: 6,
        name: "darkblue",
        type: "dark",
        background: '#31708f',
        color: '#f5f5f5'
    },
    {
        id: 7,
        name: "orange",
        type: "light",
        background: '#f07057',
        color: '#ffffff'
    }
];

export default Ember.Route.extend({
    model(params){
        // If testing and parameter is not working use this 'jyu4t' for params.guid
        return this.store.findRecord('node', params.guid).then((result)=>{
            return {
                layers,
                themes,
                guid: params.guid,
                node: result
            };
        });
    }
});
