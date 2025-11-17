import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <h3>About us</h3>
      <p>
        Meet Barmate - Your Pocket Bartender with Personality! Discover a world
        of colorful cocktails and clever mocktails pulled straight from the
        coolest drink APIs around. Whether you are mixing for a chill night in
        or showing off to friends, Barmate serves up recipes, vibes, and
        inspiration with every shake. Ready to sip, stir, and sparkle?
      </p>
      <p>
        Our mission is simple: make mixology accessible, fun, and interactive.
        No need for complicated manuals or fancy ingredients. Barmate brings the
        creativity to your fingertips. Explore new flavors, learn the art of
        garnishing, and impress your friends with drinks they’ll remember.
      </p>

      <p>
        Behind Barmate, there’s a team of cocktail enthusiasts, tech geeks, and
        flavor explorers. We constantly curate the latest trends, tips, and
        playful twists so every cocktail session feels like an adventure.
        Whether you’re a novice or a seasoned shaker, there’s something here for
        you.
      </p>

      <p>
        Safety and enjoyment go hand in hand - that’s why we include both
        alcoholic and non-alcoholic options. Mix, match, and modify to suit your
        mood, occasion, or audience. Barmate is here to inspire creativity
        without compromise.
      </p>

      <p>
        So grab your shaker, pick a recipe, and let Barmate guide you through a
        colorful world of drinks. Cheers to experimentation, flavor, and a bit
        of fun in every glass!
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;
export default About;
