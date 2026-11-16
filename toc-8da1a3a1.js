// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/index.html">GraphQL API Reference</a></span></li><li class="chapter-item "><li class="part-title">Operations</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>Queries</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/queries/folders.html">folders</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/queries/folder.html">folder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/queries/projects.html">projects</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/queries/search.html">search</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Mutations</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/mutations/create-folder.html">createFolder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/mutations/create-project.html">createProject</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/mutations/archive-project.html">archiveProject</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Subscriptions</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/subscriptions/project-changed.html">projectChanged</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/subscriptions/folder-created.html">folderCreated</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Directives</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/directives/include.html">include</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/operations/directives/skip.html">skip</a></span></li></ol><li class="chapter-item "><li class="part-title">Types</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><span>Directives</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/example.html">example</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/example-response.html">exampleResponse</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/example-variables.html">exampleVariables</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/deprecated-type.html">deprecatedType</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/deprecated.html">deprecated</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/specified-by.html">specifiedBy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/directives/one-of.html">oneOf</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Objects</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/folder.html">Folder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/user.html">User</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/project.html">Project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/legacy-project.html">LegacyProject</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/project-connection.html">ProjectConnection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/objects/project-event.html">ProjectEvent</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Interfaces</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/interfaces/node.html">Node</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Unions</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/unions/search-result.html">SearchResult</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Inputs</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/inputs/create-project-input.html">CreateProjectInput</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Enums</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/enums/project-status.html">ProjectStatus</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/enums/project-event-type.html">ProjectEventType</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span>Scalars</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/scalars/date-time.html">DateTime</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/scalars/id.html">ID</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/scalars/string.html">String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/scalars/int.html">Int</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphql/types/scalars/boolean.html">Boolean</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);

