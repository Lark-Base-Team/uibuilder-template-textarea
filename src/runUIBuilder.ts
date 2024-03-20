//@ts-nocheck
export default async function main(uiBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.textArea('textarea', { label: '基本使用', placeholder: 'Basic usage' }),
            form.textArea('textarea2', { label: '设置高度', autoSize: { minRows: 4 } }),
        ],
        buttons: ['确定', '取消'],
    }), async ({ values }) => {
        const { textarea, textarea2 } = values;
    });
}