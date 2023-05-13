import { computeDistance } from './distance';

const 故宫 = [39.916527, 116.397128] as const;
const 天安门 = [39.90316211902574, 116.3978146455078] as const;;

const distance = computeDistance(故宫, 天安门);