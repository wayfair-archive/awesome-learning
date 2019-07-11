import CMS from 'netlify-cms';
import PagePreview from './preview-templates/page-preview';
import CoursePreview from './preview-templates/course-preview';

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('courses', CoursePreview);
