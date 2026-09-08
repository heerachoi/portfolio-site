/**
 * Shared project schema for card + case-study modal.
 * Kept as JSDoc so the data layer stays plain JS while still documenting shape.
 *
 * @typedef {'프로젝트' | 'React' | 'Algorithm'} ProjectCategory
 *
 * @typedef {{ label: string, tone?: 'green' | 'pink' | 'default' }} RoleTag
 *
 * @typedef {{ type: 'paragraph', text: string }} ParagraphBlock
 * @typedef {{ type: 'list', items: string[] }} ListBlock
 * @typedef {{ type: 'numbered', items: string[] }} NumberedBlock
 * @typedef {{ type: 'subsection', title: string, items: string[] }} SubsectionBlock
 * @typedef {ParagraphBlock | ListBlock | NumberedBlock | SubsectionBlock} DetailBlock
 *
 * @typedef {{ title: string, blocks: DetailBlock[] }} DetailSection
 *
 * @typedef {object} ProjectDetail
 * @property {string} fullTitle
 * @property {string[]} skills
 * @property {string[]} tools
 * @property {string} period
 * @property {string} team
 * @property {RoleTag[]} roles
 * @property {string} contribution
 * @property {string} [categoryLabel]
 * @property {string} [image]
 * @property {DetailSection[]} sections
 *
 * @typedef {object} Project
 * @property {string} id
 * @property {string} title
 * @property {ProjectCategory} category
 * @property {string} year
 * @property {string} role
 * @property {string[]} tools
 * @property {string} problem
 * @property {string} solution
 * @property {string} impact
 * @property {string} [githubUrl]
 * @property {string} [liveUrl]
 * @property {ProjectDetail} [detail]
 */

export {};
