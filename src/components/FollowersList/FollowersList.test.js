import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FollowersList from "./FollowersList";

/*FollowersList Test Stories 
    - should render follower item
    - should render multible followers items 

*/
const FollowersListMock = () => (
  <MemoryRouter>
    <FollowersList />
  </MemoryRouter>
);

describe("FollowersList", () => {
  it("should render follower item", async () => {
    render(<FollowersListMock />);
    const FollowerDivItem = await screen.findByTestId("follower-item-0");
    expect(FollowerDivItem).toBeInTheDocument();
  });

  //   it("should render multible followers items", async () => {
  //     render(<FollowersListMock />);
  //     const FollowersDivItems = await screen.findAllByTestId(/follower-item/i);
  //     expect(FollowersDivItems.length).toBe(5);
  //   });
});
