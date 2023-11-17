function withStyles(Component) {
    return (props) => {
        const style = {
            color: "red",
            fontSize: "lem",
            ...props.style,
        };
        return <Component {...props} style={style} />;
    };
}