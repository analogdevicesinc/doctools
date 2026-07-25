<!-- lastmod 2022-08-04 -->
<!-- image -->

## www.maxim-ic.com

## CONNECTING THE DS2726 EVALUATION KIT BOARD

Figure 1. CONNECTION DIAGRAM FOR DS2726EVKIT+

<!-- image -->

V10 to V0 are voltage sense lines for the individual cells. For a 10-cell battery pack connect V10 to the positive terminal of the pack. V9 will be connected to the positive terminal of the next cell and so on down to the last cell. V0 connects to the negative terminal of the battery pack. These connections are for voltage sense and cell balancing only. The maximum amount of current they will sink is 200mA during cell balancing. The load current does not flow through these connections. For a connection diagram of a battery pack with less than 10 cells, see Figure 1.

The BATT+ connection should be connected to the positive terminal of the battery pack. The path from PACK+ to BATT+ is your charge and discharge current path. High currents will flow through this path therefore a heavy gauge wire should be used.

BATT- should be connected to the negative terminal of the battery pack. VSS is the return current path for the load.

## DS2726EVKIT+ 10-Cell Li-Ion Battery Protector Evaluation Kit

Figure 2. CELL CONNECTION DIAGRAM FOR LESS THAN 10 CELLS

<!-- image -->

## CHARGER CONNECTION

The  positive  terminal  of  the  charge  supply  should  be  connected  to  the  PAC+  terminal  of  the  EV  board.  The negative terminal of the charge supply should be connected to the negative terminal of your battery pack. This is a high current path therefore a heavy gauge wire should be used. Also, SLEEP will need to be pulled to VCC when the  charger  is  connected.  The  DS2726  does  not  regulate  charge  current.  Current  should  be  regulated  by  the charge supply.

NOTE: The DC FET does not turn on below 2.8V per cell. When charging below 2.8V per cell the charge source should charge at a lower rate to prevent damaging the DC FET. Once the per-cell voltage exceeds 2.8V, the DC FET will enable and high current charge (fast charge) can begin.

## CONFIGURATION

## Overvoltage Threshold

The overvoltage threshold is set at the OVS1 and OVS2 pins through resistors R17, R18, R32, and R33. R17 and R18 will pull OVS1 and OVS2 to VCC. R32 and R33 will pull OVS1 and OVS2 to VSS. VIM is achieved by floating the pin.

## Table 1

|      | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   | Nominal VOV Threshold (V)   |
|------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|-----------------------------|
|      | 4.10                        | 4.15                        | 4.20                        | 4.25                        | 4.30                        | 4.35                        | 4.40                        | 4.45                        | 4.50                        |
| OVS0 | V IL                        | V IM                        | V IH                        | V IL                        | V IM                        | V IH                        | V IL                        | V IM                        | V IH                        |
| OVS1 | V IL                        | V IL                        | V IL                        | V IM                        | V IM                        | V IM                        | V IH                        | V IH                        | V IH                        |

## Cell Balancing Voltage Threshold

The Cell Balancing Voltage Threshold is set at the CBS0 and CBS1 pins through resistors R15, R16, R30, and R31.  R15  and  R16  will  pull  CBS0  and  CBS1  to  VCC.  R30  and  R31  will  pull  CBS0  and  CBS1  to  VSS.  V IM is achieved by floating the pin.

Table 2

|      | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   | Cell Balancing Threshold Offset from VOV (V)   |
|------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|------------------------------------------------|
|      | 0.00                                           | 0.05                                           | 0.10                                           | 0.15                                           | 0.20                                           | 0.25                                           | 0.30                                           | 0.35                                           | 0.40                                           |
| CBS0 | V IL                                           | V IM                                           | V IH                                           | V IL                                           | V IM                                           | V IH                                           | V IL                                           | V IM                                           | V IH                                           |
| CBS1 | V IL                                           | V IL                                           | V IL                                           | V IM                                           | V IM                                           | V IM                                           | V IH                                           | V IH                                           | V IH                                           |

Cell balancing voltage:

Example:

## Short Circuit Overcurrent Delay

The short circuit delay time is set using the capacitor C15 connected to the CSCD pin. The short circuit delay time is defined by the equation:

<!-- formula-not-decoded -->

## FET

The FETs used on the DS2726 EV board are Vishay SUM110P06-07L. Refer to the data sheet for details.

The RDS\_ON rating of this FET is typ 5.5m  at V GS = -10V. The EV kit board has two FETs in parallel, therefore, the equivalent resistance is around 2.75m  . Multiply R DS\_ON times the desired DOC to get V DOC. Multiply R DS\_ON times the desired SC current to get V SC .

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Cell balancing will begin when a cell's voltage is greater than 4.1V and will terminate when all cells' voltages are greater than 4.1V.

## Number of Cells

The number of cells in the battery pack is set at the SEL0 and SEL1 pins through resistors R12, R13, R27, and R28. R12 and R13 will pull SEL0 and SEL1 to VCC. R27 and R28 will pull CBS0 and CBS1 to VSS. VIM is achieved by floating the pin. See Figure 2 for proper connections to stacks with fewer than 10 cells.

Table 3

|      | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   | Number of Series Connected Cells   |
|------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
|      | 5                                  | 6                                  | 7                                  | 8                                  | 9                                  | 10                                 | 10                                 | 10                                 | 10                                 |
| SEL0 | V IL                               | V IM                               | V IH                               | V IL                               | V IM                               | V IH                               | V IL                               | V IM                               | V IH                               |
| SEL1 | V IL                               | V IL                               | V IL                               | V IM                               | V IM                               | V IM                               | V IH                               | V IH                               | V IH                               |

## Discharge Overcurrent

The RDOC pin is a 1 μ A current sink. The R34 resistor sets the discharge overcurrent voltage threshold.

<!-- formula-not-decoded -->

The voltage seen at RDOC is sent to a comparator with the voltage seen at SNS. When VRDOC &gt; VSNS the DC FET will turn off. The voltage drop from Bat+ to the SNS pin is determined by the R DS\_ON resistance of the DC FET. See the FET section below for a description of R DS\_ON and a link to the datasheet of the FET used the on EV board.

## Short Circuit Overcurrent

The RSC pin is a 1 μ A current sink. The R35 resistor sets the short circuit voltage threshold.

<!-- formula-not-decoded -->

The voltage seen at RSC is sent to a comparator with the voltage seen at SNS. When V RSC &gt; V SNS the DC FET will turn off. The voltage drop from Bat+ to the SNS pin is determined by the R DS\_ON resistance of the DC FET. See the FET section for a description of R DS\_ON and a reference to the data sheet of the FET used the on EV board.

## Discharge Overcurrent Delay

The short circuit delay time is set using the capacitor C14 connected to the CDOCD pin. The short circuit delay time is defined by the equation:

<!-- formula-not-decoded -->

4 of 5

<!-- image -->

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-----------------|----------------------------------------------------------------|-----------------|
| 8/09            | Changed the ordering part number from DS2726K to DS2726EVKIT+. | All             |