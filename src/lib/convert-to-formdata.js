

export function convertToFormData(data, fileName, customFileKey) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        const value = data[key];
        if (key === fileName) {
            if (Array.isArray(value)) {
                value.forEach((file, index) => {
                    formData.append(customFileKey || fileName, file);
                });
            } else {
                formData.append(customFileKey || fileName, value);
            }
        } else if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
        } else {
            formData.append(key, value);
        }
    });

    return formData;
}


export function convertToFormDataForMultiple(data, fileFields) {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        const value = data[key];
        if (fileFields.includes(key)) {
            if (Array.isArray(value)) {
                value.forEach((file, index) => {
                    formData.append(key, file);
                });
            } else {
                formData.append(key, value);
            }
        } else if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
        } else {
            formData.append(key, value);
        }
    });

    return formData;
}

