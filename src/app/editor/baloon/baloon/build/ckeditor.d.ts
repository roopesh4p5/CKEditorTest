/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
declare class Editor extends BalloonEditor {
    static builtinPlugins: (typeof Alignment | typeof Bold | typeof Code | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Italic | typeof Paragraph | typeof Strikethrough | typeof Subscript | typeof Superscript | typeof Underline)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
