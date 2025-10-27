# Future Enhancements

## Contact Form Implementation (Deferred)

**Priority**: High  
**Status**: Pending  
**Estimated Effort**: 2-3 hours

### Objective
Implement the full embedded contact form with Formspree integration as specified in FR-008.

### Tasks
1. Sign up for Formspree account and create form endpoint
2. Update `FORMSPREE_ENDPOINT` in `src/components/form-handler.js`
3. Restore form markup in `src/sections/join.js` with:
   - Name, email, role selector fields
   - Optional message textarea
   - Client-side validation
   - Inline success/error feedback
4. Add form submission tests to verify:
   - Required field validation
   - Successful submission flow
   - Error handling for network failures
5. Update Arabic translations for form labels and messages
6. Test bilingual form behavior thoroughly

### Current State
- Placeholder "Contact form coming soon" message with mailto link
- Form handler skeleton exists in `src/components/form-handler.js`
- All translations already defined in `src/i18n/{en,ar}.json`

### References
- Specification: `specs/001-elmentor-landing/spec.md` (FR-008)
- Contract: `specs/001-elmentor-landing/contracts/forms.yaml`
- Implementation file: `src/sections/join.js`
