const Text = ({ style = {} }) => (
    <p style={{...style, fontFamily: "Inter" }}>Hello world!</p>
);

const StyledText = withStyles(Text); 