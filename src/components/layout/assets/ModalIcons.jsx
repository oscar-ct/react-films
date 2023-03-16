
const ModalIcons = ( { modalIdObj } ) => {

    if (modalIdObj.length !== 0) {
        const { Favorite, WatchList } = modalIdObj[0];
        return (
            <label className="swap swap-active text-5xl">
                <input type="checkbox" />
                {Favorite ? <div className="swap-on">❤️</div> : WatchList ? <div className="swap-on">🎬</div> : ""}
            </label>
        )
    }
};

export default ModalIcons;