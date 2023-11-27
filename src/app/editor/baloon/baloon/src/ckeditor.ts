/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import {
	Bold,
	Code,
	Italic,
	Strikethrough,
	Subscript,
	Superscript,
	Underline
} from '@ckeditor/ckeditor5-basic-styles';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends BalloonEditor {
	public static override builtinPlugins = [
		Alignment,
		Bold,
		Code,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Italic,
		Paragraph,
		Strikethrough,
		Subscript,
		Superscript,
		Underline
	];

	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'|',
				'undo',
				'redo',
				'|',
				'subscript',
				'superscript',
				'-',
				'fontBackgroundColor',
				'fontColor',
				'|',
				'fontFamily',
				'fontSize',
				'|',
				'alignment',
				'code'
			],
			shouldNotGroupWhenFull: true
		},
		language: 'en'
	};
}

export default Editor;
