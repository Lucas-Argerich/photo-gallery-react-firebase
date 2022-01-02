import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'
import './index.scss'

export default function PhotoGallery() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(images)
    }, [images])

    useEffect(() => {
        console.log("loading = " + loading)
    }, [loading])

    async function fetchData() {
        const querySnapshot = await getDocs(collection(db, "images"));
        querySnapshot.forEach((doc) => {
            setImages(images => [...images, { id: doc.id, url: doc.data().url }])
        });
        setLoading(false)
        getMeta(images[0].url)
    }

    function getMeta(url) {
        const img = new Image();
        img.src = url;
        img.addEventListener("load", function () {
            const measures = { width: this.naturalWidth, height: this.naturalHeight }
            console.log(measures)
        });
        

    }




    return (
        <div className="photoGallery">
            <div className="mainPhotoContainer" style={loading ? null : { backgroundImage: `url(${images[0].url})` }} />
        </div>
    )
}
