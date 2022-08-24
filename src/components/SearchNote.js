const SearchNote = ({ SearchNote }) => {
    return (
        <>
            <input type="search" placeholder="Cari catatan" onInput={(event) => SearchNote(event.target.value)} />
        </>
    )
}

export default SearchNote;