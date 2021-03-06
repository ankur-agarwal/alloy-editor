/**
 * SPDX-FileCopyrightText: © 2014 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

import React from 'react';

/**
 * The ButtonsStylesListHeader class provides the header of an list of style items.
 *
 * @class ButtonsStylesListHeader
 */
class ButtonsStylesListHeader extends React.Component {
	static key = 'buttonStylesListHeader';

	/**
	 * Lifecycle. Renders the UI of the button.
	 *
	 * @instance
	 * @memberof ButtonsStylesListHeader
	 * @method render
	 * @return {Object} The content which should be rendered.
	 */
	render() {
		if (this.props.styles && this.props.styles.length) {
			return <span className="ae-list-header">{this.props.name}</span>;
		} else {
			return null;
		}
	}
}

export default ButtonsStylesListHeader;
