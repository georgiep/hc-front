import React,{useEffect,useState,useRef} from "react";
import dynamic from "next/dynamic";

function useDynamicSVGImport(name, options = {}) {
    const ImportedIconRef = useRef();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const { onCompleted, onError } = options;

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (
                    await dynamic(() => import(`../../svgs/${name}`))
                );

                setLoading(false);

                if (onCompleted) {
                    onCompleted(name, ImportedIconRef.current);
                }
            } catch (err) {
                if (onError) {
                    onError(err);
                }
                setError(err);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}

export default useDynamicSVGImport