// 一键复制到剪贴板 + sonner 轻提示
import { toast } from "sonner";

export function copyText(text: string, label = "已复制") {
  navigator.clipboard
    .writeText(text)
    .then(() => toast.success(`${label}：${text}`))
    .catch(() => toast.error("复制失败，请手动选择复制"));
}
