export type TProject = {
    name: string,
    description: string,
    git: string,
    deploy: string,
    done: Date,
    images: string[],
};


export type TAditionalEducaion = {
    name: string,
    description: string,
    organization: string,
    certificate?: string,
    notdeployed?: boolean,
    projects?: {
        name: string,
        repository: string,
        deploy: string
    }[],
};