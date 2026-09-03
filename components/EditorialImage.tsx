import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  priority = false,
  loading,
  className = "",
  imageClassName = "object-cover",
  sizes = "100vw"
}: EditorialImageProps) {
  return (
    <div className={`image-shell ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : loading}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
