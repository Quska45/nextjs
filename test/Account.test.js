/**
 * @jest-environment jsdom
 */

import Account from "./Account";
import { render } from "@testing-library/react"

it("matches snapshot", () => {
    const utils = render(<Account name="호박너구리" mbti="ESFJ"></Account>)
    expect(utils.container).toMatchSnapshot()
})