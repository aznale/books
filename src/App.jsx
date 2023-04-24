import BookList from './BookList';
import ImageList from './ImageList';
import MyComponent from './MyComponent';

export default function App() {
    return (

        <>

            {/* <div style={{ columnCount: 2 }}>
                <MyComponent />
                <ImageList />
            </div> */}

            {/* <div style={{ width: "49%", display: "inline-block" }}>
                <MyComponent />
            </div>
            <div style={{ width: "49%", display: "inline-block" }}>
                <ImageList />
            </div> */}

            <div style={{ display: "flex", justifyContent: "center", maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ flex: 1 }}>
                    <MyComponent />
                </div>
                <div style={{ flex: 1 }}>
                    <ImageList />
                </div>
                <div style={{ flex: 1 }}>
                    <BookList />
                </div>
            </div>




        </>

    );
}