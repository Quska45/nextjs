/**
 * @jest-environment jsdom
 */

import HeaderMenus from "../../components/HeaderMenus";
import { render } from "@testing-library/react"
import { getMenus } from '../../lib/menus'

it("matches snapshot", () => {
    let menus = getMenus();

    const utils = render(<HeaderMenus menus={ menus }></HeaderMenus>)
    expect(utils.container).toMatchSnapshot()
})