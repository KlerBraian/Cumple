import React, { useState, useEffect } from "react";

function App() {
    const [files, setFiles] = useState([]);

    // Maneja el cambio en el input de archivo
    function handleChange(e) {
        const newFile = e.target.files[0];
        if (newFile) {
            const newImg = URL.createObjectURL(newFile);
            const updatedFiles = [...files, newImg];
            setFiles(updatedFiles);

            // Guardar en localStorage
            localStorage.setItem('uploadedImages', JSON.stringify(updatedFiles));
        }
    }

    useEffect(() => {
        // Cargar imágenes desde localStorage cuando el componente se monta
        const savedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        setFiles(savedImages);

        // Cleanup function to revoke object URLs
        return () => {
            files.forEach(file => URL.revokeObjectURL(file));
        };
    }, []);

    return (
        <div className="App">
            <h2>Agregar imagen:</h2>
            <input type="file" accept="image/*" onChange={handleChange} />
            <div className="image-gallery">
                {files.map((file, index) => (
                    <img 
                        key={index} 
                        src={file} 
                        alt={`Imagen ${index}`} 
                        style={{ width: '200px', margin: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
