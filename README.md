
# Chuck Norris Facts

An app for rating Chuck Norris Facts.

### Log of work done

1. Setup git repository
2. Add .gitignore (copied from another project)
3. Add missing ESLint configuration with `eslint --init` (I used https://github.com/standard/standard)
4. Fixed linting issues (IntelliJ IDE does this automatically)
5. Add `Index` and `Detail` views
6. Set document title to display depending on route metadata
7. Add `Layout` component with `<Content>` and `<Footer>` components. The <Content> component contains a `<router-view>`.
8. Setup Vuex to fetch 10 facts from Chuck Norris API
9. List facts in Index
10. Replace favicon with Chuck Norris
11. Affix footer and update footer style
12. Fix issue where wrong title flashes on initial load
13. Change font to consolas
14. Write this readme!


### Missing features and issues

- No support for breadcrumbs in title
- Missing support for likes, including ordering by number of likes and displaying number of likes
- Details page has only placeholder content
- Items on index page are not truncated
- Clicking on an item in the list should take you to that item's detail page
- Fix bug where duplicate facts sometimes appear
- Default title
- Add tests

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
