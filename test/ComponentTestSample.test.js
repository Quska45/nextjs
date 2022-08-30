/**
 * @jest-environment jsdom
 */

import ComponentTestSample from "./ComponentTestSample";
import { render } from "@testing-library/react"

it("matches snapshot", () => {
    const utils = render(<ComponentTestSample name="호박너구리" mbti="ESFJ"></ComponentTestSample>)
    expect(utils.container).toMatchSnapshot()
})