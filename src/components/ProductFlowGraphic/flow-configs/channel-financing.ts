import type { FlowEntity, FlowConnection, FlowBadge, FlowStep, LegendItem } from '../ProductFlowGraphic';

export const channelFinancingEntities: FlowEntity[] = [
    {
        label: 'Brand',
        sublabel: 'OEM / Brand',
        x: 20, y: 30, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
    {
        label: 'Neenv',
        sublabel: 'Platform',
        x: 200, y: 30, width: 150, height: 72,
        fill: '#1a2d7a', stroke: '#1a2d7a',
        textColor: '#ffffff', sublabelColor: '#b5c4e8',
    },
    {
        label: 'Lender',
        sublabel: 'NBFC / Bank',
        x: 380, y: 30, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#e2e5eb',
    },
    {
        label: 'Dealer',
        sublabel: 'MSME Partner',
        x: 200, y: 260, width: 150, height: 72,
        fill: '#f8f9fc', stroke: '#f59e0b', strokeWidth: 1.5,
    },
];

export const channelFinancingConnections: FlowConnection[] = [
    // 1. Brand → Neenv (trade data)
    {
        from: [170, 60],
        to: [200, 60],
        color: '#5d71c4',
        label: 'Trade data',
        labelPosition: [185, 50],
        animated: true,
        animationDirection: 'forward',
    },
    // 2. Neenv → Lender (loan request)
    {
        from: [350, 58],
        to: [380, 58],
        color: '#5d71c4',
        label: 'Loan request',
        labelPosition: [365, 48],
        animated: true,
        animationDirection: 'forward',
    },
    // 3. Lender → Neenv (funds approved)
    {
        from: [380, 80],
        to: [350, 80],
        color: '#0a714e',
        label: 'Funds approved',
        labelPosition: [365, 98],
        animated: true,
        animationDirection: 'reverse',
    },
    // 4. Neenv → Dealer (disbursement — main flow)
    {
        from: [275, 102],
        to: [275, 260],
        color: '#0a714e',
        strokeWidth: 2,
        animated: true,
        animationDirection: 'forward',
    },
    // 5. Dealer → Brand (purchases goods — curved)
    {
        path: 'M 200 296 C 120 296, 95 180, 95 102',
        from: [200, 296],
        to: [95, 102],
        color: '#f59e0b',
        label: 'Purchases goods',
        labelPosition: [100, 200],
        animated: true,
        animationDirection: 'forward',
    },
    // 6. Dealer → Lender (EMI repayment — dashed)
    {
        path: 'M 350 296 C 430 296, 455 180, 455 102',
        from: [350, 296],
        to: [455, 102],
        color: '#6b7280',
        dashed: true,
        animated: false,
        label: 'EMI repayment',
        labelPosition: [460, 200],
    },
];

export const channelFinancingBadges: FlowBadge[] = [
    {
        text: '\u20B9 Disbursed',
        x: 320, y: 185,
        bgColor: '#ecfdf5', textColor: '#0a714e',
    },
    {
        text: 'Brand paid upfront',
        x: 95, y: 120,
        bgColor: '#eff6ff', textColor: '#1a2d7a',
    },
];

export const channelFinancingSteps: FlowStep[] = [
    { number: 1, x: 185, y: 48, bgColor: '#5d71c4' },
    { number: 2, x: 365, y: 48, bgColor: '#5d71c4' },
    { number: 3, x: 258, y: 180, bgColor: '#0a714e' },
    { number: 4, x: 148, y: 260, bgColor: '#f59e0b' },
];

export const channelFinancingLegend: LegendItem[] = [
    { color: '#5d71c4', label: 'Data flow' },
    { color: '#0a714e', label: 'Fund flow' },
    { color: '#f59e0b', label: 'Goods flow' },
    { color: '#6b7280', label: 'Repayment' },
];
