<!-- lastmod 2022-08-04 -->
## MAX6397 Evaluation Kit

## General Description

The  MAX6397  evaluation  kit  (EV  kit)  demonstrates  a high-voltage overvoltage protection circuit for applications that  must  survive  load  dump  and  high-voltage  transient conditions.  This  EV  kit  is  a  fully  assembled  and  tested surface-mount board.

The EV kit supports high-output currents up to 5A, runs at  voltages  up  to  72V,  and  can  withstand  temperatures ranging  from  -40°C  to  +105°C.  Two  alternate  voltage inputs  implement  two  different  schemes  for  reversebattery  protection.  Connections  to  the  on-chip  linear regulator, capable of driving 100mA, and the power-good (POK) signal are also provided.

## Features

- 5.5V to 72V Wide Supply Voltage Range
- Up to 5A Output Current Capacity
- Selectable Overvoltage Mode and OvervoltageLimiter Mode
- Adjustable Overvoltage Threshold
- 100V Reverse-Battery Protection
- Always-On Linear Regulator Output
- Power-Good Signal Output

## Quick Start

## Procedure

The  MAX6397  EV  kit  is  fully  assembled  and  tested. Follow  these  steps  to  verify  operation. Do not turn on the power supply until all connections are completed .

- 1) Connect a DC power supply (0 to 20V or above, 5A or depending on load) to VIN1 and GND.
- 2)  Connect  a  voltmeter  or  oscilloscope  and  a  load  (if desired) to OUT and GND.
- 3)  Make  sure  the  J2  shunt  connects  pins  1  and  2 (overvoltage-protect mode). The J4 shunt should connect pins 1 and 2.
- 4)  Turn  on  the  power  supply  and  increase  the  input voltage.  The  output  turns  on  when  the  input  voltage reaches 5.5V. Increase the supply voltage further; the output turns off when the input voltage reaches 17V.
- 5) The above steps can be followed for a power supply connected to VIN2 or VIN3. The thresholds for turn on and turn off for inputs VIN2 and VIN3 are higher due to the voltage drop across the reverse-battery protection.
- 6) Check the linear regulator output and POK signal.

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX6397EVKIT | EV Kit |

<!-- image -->

Evaluates: MAX6397

## Detailed Description

The MAX6397  EV  kit demonstrates a high-voltage overvoltage-protection  circuit  for  applications  that  must survive  load  dump  and  high-voltage  transient  conditions. This  EV  kit  can  be  configured  in  overvoltage  mode  or overvoltage limiter mode by setting jumper J2 (see Table 1 for the jumper settings), and can supply up to 5A of output current.

The  MAX6397  EV  kit  has  three  positive  power-supply inputs:  VIN1,  VIN2,  and  VIN3.  Inputs  VIN2  and  VIN3 have diode-based and p-channel MOSFET-based reversebattery  protections,  respectively,  and  VIN1  bypasses  all reverse-battery protections.

## Overvoltage Mode

In  overvoltage  mode,  the  MAX6397  monitors  the  input voltage and turns off the series-pass n-channel MOSFET (M1)  when  the  input  voltage  exceeds  the  programmed threshold  voltage.  As  soon  as  the  input  voltage  drops below  the  overvoltage  threshold,  the  MAX6397  charge pump fully enhances MOSFET M1 to turn the output back on.  The  voltage-divider  formed  by  R1  and  R2  sets  the threshold voltage. The resistors provided in the MAX6397 EV kit set the threshold at 17V. If inputs VIN2 or VIN3 are used, this threshold is higher due to the voltage drop in D1 or M2.

The overvoltage threshold can be adjusted by varying R1 or R2 using the equation below:

<!-- formula-not-decoded -->

where V OV  is the desired overvoltage threshold. To maintain  threshold  accuracy,  R2  must  be  less  than  250kΩ. Since the EV kit ships with R2 set at 49.9kΩ, use the for -mula above to change the threshold by changing R1 only.

## Overvoltage-Limiter Mode

In  overvoltage-limiter  mode,  the  MAX6397  monitors the  output  voltage  instead  of  the  input  voltage.  The output  voltage  is  sensed  through  the  same  voltagedivider formed by R1 and R2, so the equation given for overvoltage  mode  also  applies  to  the  threshold  voltage in overvoltage limiter mode. During an input overvoltage transient in this mode, the MOSFET switches off until the output voltage falls to 95% of the threshold voltage, and then the MOSFET switches back on. This cycle repeats, generating a sawtooth waveform on the output.

## Evaluates: MAX6397

The minimum output voltage in  overvoltage-limiter  mode depends  on  load  current,  output  capacitance,  and  the MOSFET's switching period. The MAX6397 EV kit comes with  one  22μF  capacitor  at  the  output  to  supply  the load  during  the  time  when  the  MOSFET  is  off.  Connect the  optional  electrolytic  capacitor  C13  (150μF,  100V)  to support  load  currents  higher  than  0.5A  when  the  EV  kit operates in overvoltage limiter mode.

Add capacitor C3 on the gate of MOSFET M1 to decrease the  frequency  of  the  sawtooth  waveform.  This  process helps limit the device's power dissipation.

## Linear Regulator Output and Power-Good Signal

Connections  are  also  included  for  the  linear  regulator output  and  the  power-good  (POK)  signal.  The  linear regulator  supplies  up  to  100mA  at  5V,  limited  by  the ambient  temperature,  the  input/output  voltages,  and  the package power dissipation. The POK signal has a 100kΩ resistor (R3) to the regulator output. The linear regulator is always on regardless of the state of SHDN .

## Jumper Selection

To filter  fast  transients  that  may  be  present  at  the  input from reaching the MAX6397, place a small resistor, R4, (10Ω, for example) on the board, and cut jumper J1.

Three-pin jumper J2 selects between overvoltage mode and  overvoltage  limiter  mode;  do  not  leave  this  jumper unconnected. Three-pin jumper J3 controls the gate drive of  p-channel  MOSFET  M3  used  as  a  reverse-  battery protection. Use J3 to disconnect resistor R5 when M3 is not used to avoid supply leakage through R5. Three-pin jumper  J4  controls  the SHDN pin  of  the  MAX6397  and can  enable  or  disable  the  MOSFET  M1  enhancement. Table 1 lists the jumper options.

## Table 1. Jumper Function

| JUMPER   | SHUNT POSITION AND FUNCTION        | SHUNT POSITION AND FUNCTION        |
|----------|------------------------------------|------------------------------------|
| JUMPER   | 1 and 2                            | 2 and 3                            |
| J1       | Shorted: RC input filter disabled* | Shorted: RC input filter disabled* |
| J2       | Overvoltage mode*                  | Overvoltage limiter mode           |
| J3       | M2 gate drive is disabled*         | M2 gate drive is enabled           |
| J4       | U1 is enabled*                     | U1 is disabled                     |

*Default position.

│

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                        |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C1, C7        |     2 | 22µF, 100V aluminum electrolytic capacitors Vishay 222215364229                                                    |
| C2, C8-C12    |     0 | Not installed, capacitors                                                                                          |
| C3            |     0 | Not installed, capacitor (1206)                                                                                    |
| C4            |     1 | 10µF, 10V X7R ceramic capacitor Murata GRM31CR71A106KA01B or TDK C3216X7R1C106K                                    |
| C5            |     0 | Not installed, capacitor (1206)                                                                                    |
| C6            |     1 | 0.1µF, 100V X7R ceramic capacitor TDK C3216X7R2A104K or AVX 12061C104KAT2A                                         |
| C13           |     0 | Not installed, 150µF/100V electrolytic capacitor Vishay BC Components 118AHT-222211829151 or Epcos B41693A9157Q009 |
| D1            |     1 | 8A/100V Schottky diode International Rectifier 8TQ100S-IS or STMicroelectronics STPS8H100G                         |
| D2            |     1 | 60V, 600W TVS diode Diodes Inc. SMBJ54A or Fairchild SMBJ54A                                                       |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE                |
|-------------------------|--------------|------------------------|
| AVX North America       | 864-967-2150 | www.avx.com            |
| Central Semiconductor   | 631-435-1110 | www.centralsemi.com    |
| Diodes Incorporated     | 805-446-4800 | www.diodes.com         |
| ECS                     | 714-895-6351 | www.ecsconn.com        |
| EPCOSAG                 | 732-906-4300 | www.epcos.com          |
| International Rectifier | 310-322-3331 | www.irf.com            |
| Murata Americas         | 800-241-6574 | www.murataamericas.com |
| STMicroelectronics      | 408-452-8585 | www.us.st.com          |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com  |
| Vishay                  | 402-563-6866 | www.vishay.com         |

Note: Indicate you are using the MAX6397 when contacting these component suppliers.

Evaluates: MAX6397

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| D3            |     1 | 18V zener diode Central Semi CMPZ5248B or Diodes Inc. MMBZ5248BT                   |
| D4            |     0 | Not installed, optional TVS diode (DO-15)                                          |
| J1            |     0 | Not installed, 2-pin header                                                        |
| J2-J4         |     3 | 3-pin headers                                                                      |
| M1            |     1 | 100V, 33A n-channel MOSFET International Rectifier IRF540NS or Fairchild FQB33N10  |
| M2            |     1 | 100V, 23A p-channel MOSFET International Rectifier IRF9540NS or Fairchild FQB22P10 |
| R1            |     1 | 649kΩ ± 1% resistor (0805)                                                         |
| R2            |     1 | 49.9kΩ ± 1% resistor (0805)                                                        |
| R3, R5        |     2 | 100kΩ ± 1% resistors (0805)                                                        |
| R4            |     0 | Not installed, resistor (0805)                                                     |
| R6            |     1 | 2.2MΩ ± 1% resistor (0805)                                                         |
| U1            |     1 | High-voltage overvoltage-protection circuit (8 TDFN-EP*) Maxim MAX6397LATA-T       |
| -             |     1 | PCB: MAX6397 EVALUATION KIT                                                        |

Figure 1. MAX6397 EV Kit Schematic

<!-- image -->

Figure 2. MAX6397 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX6397 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX6397 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX6397 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                          | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 2 | 4/15            | Deleted automotive reference in General Description and Detailed Description sections; moved Component List and Component Suppliers tables to page 3 and Quick Start section to page 1; added Revision History table | 1, 2, 4, 8      |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX6397