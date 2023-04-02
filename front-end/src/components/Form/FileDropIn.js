import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

function FileDropIn() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <Box
      {...getRootProps()}
      border="2px dashed"
      borderColor="gray.400"
      p={8}
      textAlign="center"
      cursor="pointer"
      mt="2%"
    >
      <Text> Bills, Statement, etc </Text>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Drop your files here</Text>
      ) : (
        <Text>Drag and drop your files here, or click to browse</Text>
      )}
      {files.map((file) => (
        <div key={file.name}>
          <Text>{file.name}</Text>
        </div>
      ))}
    </Box>
  );
}

export default FileDropIn;
