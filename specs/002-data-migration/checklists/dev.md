# Dev Checklist: Real Data Migration

- [ ] All data files in `src/assets/data/` are updated with real content
- [ ] Data files are valid JSON and match required schema
- [ ] Section modules in `src/sections/` are updated to use new data
- [ ] i18n files in `src/i18n/` are updated for all new content (EN/AR)
- [ ] All new/updated sections have corresponding tests
- [ ] No hardcoded text remains in section modules
- [ ] Asset/image references are correct and optimized
- [ ] Lint passes with no errors (`npm run lint`)
- [ ] Tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Deployment preview matches local build
- [ ] No console errors or warnings in browser
