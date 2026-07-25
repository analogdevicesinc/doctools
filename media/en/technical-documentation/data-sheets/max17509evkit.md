<!-- lastmod 2022-08-02 -->
## MAX17509 Evaluation Kit

## General Description

The MAX17509 evaluation kit (EV kit) is a fully assembled and tested circuit board to demonstrate the performance of the MAX17509, a dual 3A, high-efficiency, synchronous step-down DC-DC converter. The EV kit operates from a 4.5V to 16V input voltage to generate two, independent 3.3V  and  1.2V  outputs,  with  each  regulator  delivering up to 3A continuous output current. The EV kit is preset to  the  default  1MHz  switching  frequency  for  optimum efficiency  and  component  sizes,  and  each  regulator operates 180° out-of-phase to reduce input-voltage ripple and  total  RMS  input  ripple  current.  The  EV  kit  also features  adjustable  input  undervoltage-lockout  (UVLO), programmable  frequency,  external  frequency  synchronization  input,  adjustable  output  voltage  ranging  from 0.904V  to  3.782V  and  4.756V  to  5.048V  with  20mV resolution, selectable switching slew rate, adjustable softstart time with soft-stop option, power-good outputs, and selectable  overcurrent  (OC)  fault  response  to  promote design flexibility and system reliability.

## Features

- Wide Input-Voltage Range (4.5V to 16V)
- 3.3V and 1.2V Output Voltages
- Up to 3A Output Current per Regulator
- Two Independent Outputs Operating 180° Out-ofPhase
- 1MHz Switching Frequency
- External Frequency Synchronization Input
- Brickwall and Latchoff Overcurrent Response (Selectable to Hiccup Response)
- Autoconfigured Internal Compensation
- Power-Good Output Indicator
- Independent Adjustable EN/UVLO Input
- Independent Adjustable Soft-Start Time with SoftStop Option
- Selectable Switching Slew Rate for EMC Compliant
- Low-Profile and Small-Size, Surface-Mount Components
- Fully Assembled and Tested

Evaluates:  MAX17509 4.5V-16V,

## Dual 3A Synchronous Buck Converter

## Quick Start

## Recommended Equipment

- MAX17509 EV kit
- 4.5V to 16V, 4A DC input power supply
- Two loads capable of sinking 3A
- Digital voltmeters (DVM)
- 100MHz dual-trace oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Set the power supply at a voltage between 4.5V and 16V. Disable the power supply.
- 2) Connect the positive and negative terminals of the power supply to IN and PGND PCB pads, respectively.
- 3) Connect the positive and negative terminals of the first 3A load to OUT1 and PGND PCB pads, respec -tively, and the second 3A load to OUT2 and PGND PCB pads, respectively. Set both loads to 0A.
- 4) Connect the first DVM across the OUT1 and PGND PCB pads, and the second across OUT2 and PGND, respectively.
- 5) Change the position of SW1 and SW2 to position 1-2 (or 2-3) to enable the respective regulator.  SW1 and SW2 in the middle position will disable the device.
- 6) Enable the input power supply.
- 7) Verify that DVM1 displays 3.3V and DVM2 displays 1.2V.
- 8) Increase the load up to 3A to verify that DVM continues displaying 3.3V and 1.2V, respectively. Note that the EV kit is designed to demonstrate compact solution-size so that the output voltage-sensing is performed near C2 for VOUT1 and C3 for VOUT2. Therefore, the output voltage is accurate across those respective components.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17509 Evaluation Kit

## Detailed Description of Hardware

The EV kit  is  a  proven  circuit  to  demonstrate  the  highefficiency and compact solution-size of the synchronous step-down DC-DC regulators. The EV kit operates from a 4.5V to 16V input voltage to generate two independent 3.3V and 1.2V outputs, with each regulator delivering up to 3A continuous output current. The switching frequency is  set  to  1MHz  to  balance  efficiency  and  component size.  The  EV  kit  includes  switches  SW1,2  to  enable/

Table 1. Summary of Resistor Programming

|   Index | 1% RES.           | R13 MODE                             | R13 MODE    | R13 MODE   | R1 SS1       | R1 SS1   | R1 SS1    | R2 SS2   | R2 SS2   | R2 SS2    | R5, R8 COARSE_   | R6, R7 FINE_   |
|---------|-------------------|--------------------------------------|-------------|------------|--------------|----------|-----------|----------|----------|-----------|------------------|----------------|
|         | (kΩ)              | MODE                                 | PHASE SHIFT | FSW        | OC           | SSTOP1   | TSS1 (ms) | LX- SLEW | SSTOP2   | TSS2 (ms) | COARSE V OUT (V) | FINE V OUT (V) |
|       0 | 475 (OPEN or VCC) | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 180°        | 500kHz     | LATCHOFF     | DISABLE  | 1 4       | MAXIMUM  | DISABLE  | 1         | 0.650            | 0.000          |
|       1 | 200               | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 180°        | 1.0MHz     | LATCHOFF     | DISABLE  |           | MAXIMUM  | DISABLE  | 4         | 0.650            | 0.019          |
|       2 | 115               | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 180°        | 1.5MHz     | LATCHOFF     | DISABLE  | 8         | MAXIMUM  | DISABLE  | 8         | 0.650            | 0.037          |
|       3 | 75                | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 180°        | 2.0MHz     | LATCHOFF     | DISABLE  | 16        | MAXIMUM  | DISABLE  | 16        | 0.966            | 0.057          |
|       4 | 53.6              | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 0°          | 500kHz     | BRICKWALLAND | DISABLE  | 1         | MAXIMUM  | ENABLE   | 1         | 1.281            | 0.078          |
|       5 | 40.2              | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 0°          | 1.0MHz     | BRICKWALLAND | ENABLE   | 4         | MAXIMUM  | ENABLE   | 4         | 1.597            | 0.097          |
|       6 | 30.9              | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 0°          | 1.5MHz     | BRICKWALLAND | DISABLE  | 8         | MAXIMUM  | ENABLE   | 8         | 1.912            | 0.115          |
|       7 | 24.3              | TWO SINGLE-PHASE INDEPENDENT OUTPUTS | 0°          | 2.0MHz     | BRICKWALLAND | DISABLE  | 16        | MAXIMUM  | ENABLE   | 16        | 2.228            | 0.135          |
|       8 | 19.1              | DUAL-PHASE, SINGLE                   | 180°        | 500kHz     | HICCUP       | DISABLE  | 1         | MINIMUM  | DISABLE  | 1         | 2.543            | 0.157          |
|       9 | 15                | DUAL-PHASE, SINGLE                   | 180°        | 1.0MHz     | HICCUP       | DISABLE  | 4         | MINIMUM  | DISABLE  | 4         | 2.859            | 0.176          |
|      10 | 11.8              | OUTPUT                               | 180°        | 1.5MHz     | HICCUP       | DISABLE  | 8         | MINIMUM  | DISABLE  | 8         | 3.174            | 0.194          |
|      11 | 9.09              | DUAL-PHASE, SINGLE                   | 180°        | 2.0MHz     | HICCUP       | DISABLE  | 16        | MINIMUM  | DISABLE  | 16        | 3.490            | 0.213          |
|      12 | 6.81              | DUAL-PHASE, SINGLE                   | 180°        | 500kHz     |              | ENABLE   | 1         | MINIMUM  | ENABLE   | 1         | 4.756 (7V VIN)   | 0.235          |
|      13 | 4.75              | DUAL-PHASE, SINGLE                   | 180°        | 1.0MHz     |              |          | 4         | MINIMUM  | ENABLE   | 4         | 4.756 (9V VIN)   | 0.254          |
|      14 | 3.01              | DUAL-PHASE, SINGLE                   | 180°        | 1.5MHz     |              |          | 8         | MINIMUM  | ENABLE   | 8         | 4.756 (12V VIN)  | 0.272          |
|      15 | GND               | DUAL-PHASE, SINGLE                   | 180°        | 2.0MHz     |              |          | 16        | MINIMUM  | ENABLE   | 16        | 4.756 (16V VIN)  | 0.291          |

## Evaluates:  MAX17509 4.5V-16V, Dual 3A Synchronous Buck Converter

disable  the  device,  test  point  TP1  to  optionally  synchronize  to  an  external  clock  source  (SYNC),  and  LED1,2 connected  to  PGOOD1,2  to  indicate  the  status  of  the outputs. Additional footprints of optional components are included  to  ease  board  modification  for  different  input/ output  configurations. Table  1 displays the resistor programming options. When the output voltage is changed, refer to the MAX17509 IC data sheet's recommendation on the inductance and capacitance selection criteria.

## MAX17509 Evaluation Kit

## Regulator Enable and Adjustable UVLO

The  device  can  be  self-enabled  by  connecting  EN\_  to AVCC, and can optionally be programmed to turn on at the  input-voltage  threshold  by  connecting  EN\_  to  the resistor-divider  between  IN\_  to  GND.  The  EV  kit  has SW1 and SW2 to enable regulator 1 and 2, respectively, through the input supply or AVCC. Moving the switches to  position  1  enables  the  device  at  a  4.1V  input  UVLO threshold,  while  moving  to  position  3  connects  EN\_  to AVCC.  Moving  a  switch  to  position  2  will  disable  the respective regulator. The adjustable-input UVLO threshold of  a  regulator  can  be  programmed  with  top  feedback resistor RU connected between IN\_ and EN\_, and bottom feedback resistor RB connected between EN\_ and GND. The adjustable-input UVLO threshold of regulator 1 can be programmed with the resistor-dividers R15 (RU1) and R3 (RB1), and regulator 2 with R16 (RU2) and R10 (RB2).

Choose  RU\_  and  then  calculate  RB\_  with  the  following equation:

<!-- formula-not-decoded -->

Where VINU is the input threshold voltage at which the device is required to turn on. Ensure that VINU is higher than 0.93 x V OUT .

## Mode/Phase Shift/ Switching Frequency (MODE)

The MODE pin sets the device as a single-phase, dualoutput/dual-phase, or single-output, while also setting the phase-shift and switching frequency. The EV kit operates in  a  single-phase,  dual-output  configuration,  each  with up  to  3A  output  current.  Each  regulator  operates  with 180°  out-of-phase  and  1MHz  switching  frequency.  The phase-shift mode can be selected to be either 0° or 180° out-of-phase in the dual-output mode only. The device is

## Evaluates:  MAX17509 4.5V-16V, Dual 3A Synchronous Buck Converter

also capable of configuring different switching frequency options: 0.5MHz, 1MHz, 1.5MHz, and 2MHz for input voltage up to 6V.

## Soft-Start/Soft-Stop Options and Over-Current Response (SS1)

The SS1 pin sets regulator 1's soft-start timing among 1, 4, 8, and 16ms, as well as its soft-stop option. The SS1 pin also sets options to attempt regulation following an under and overcurrent event. The two options for fault response due to UC/OC protection are: (1) hiccup and (2) Brickwall and  latchoff.  The  EV  kit  is  set  to  8ms  soft-start  timing, with soft-stop enabled for regulator 1, and Brickwall-andlatchoff overcurrent response for both regulators.

## Soft-Start/Soft-Stop Options and Switching Slew rate (SS2)

The SS2 pin sets regulator 2's soft-start timing among 1, 4, 8, and 16ms, as well as its soft-stop option. The SS2 pin  also  sets  the  switching  slew  rate  of  both  regulators to either maximum or minimum. The EV kit is set to 8ms soft-start  timing,  with  soft-stop  enabled,  for  regulator  2, and maximum switching slew rate for both regulators.

## External Clock Synchronization (SYNC)

The SYNC  pin allows frequency-synchronization to external clock. The EV kit provides a SYNC test point (TP1) that  allows  connecting  an  external  clock  for  frequency synchronization with frequency within the 900kHz to  1.3MHz  range  before  regulation  starts  for  stable operation  of  1MHz  internal  switching  frequency  at  the 12VIN  range, and within 0.7-2.75 of the internal switching frequency, with a limit of 450kHz to 2.2MHz for the 5V IN range.  The  minimum  external  clock  high  pulse  width should  be  greater  than  30ns.  The  minimum  voltage should  be  below  0.6V,  with  the  maximum  level  being above 1.8V (e.g., 0 to 5V).

│

## MAX17509 Evaluation Kit

## Programmable Output Voltage

The device generates an independently adjustable output voltage in the ranges of 0.904V to 3.782V and 4.756V to 5.048V in 20mV steps. The EV kit provides 3.3V on regulator 1 and 1.2V on regulator 2. The target output voltage (V OUT )  is  determined  by  the  sum  of  COARSE  voltage (COARSE\_)  and  FINE  voltage  (FINE\_),  which  can  be programmed  by  connecting  resistors  from  COARSE and  FINE  pins  to  GND.  The  COARSE-resistor  value  is selected according to the closest COARSE\_ voltage less than or equal to the target output voltage from Table 1. The FINE resistor value is chosen by the index number, calculated by the following equation:

<!-- formula-not-decoded -->

Table 2. Summary of Resistor Setting and the Optimal Inductor and Output Capacitor Selection for Typical Output Voltages

| V OUT (V)                                             | COARSE INDEX   | FINE INDEX   | COARSE RESISTOR (kΩ)   | FINE RESISTOR (kΩ)   | 6 ≤ V IN ≤ 16V, F SW = 1MHz   | 6 ≤ V IN ≤ 16V, F SW = 1MHz   |
|-------------------------------------------------------|----------------|--------------|------------------------|----------------------|-------------------------------|-------------------------------|
| V OUT (V)                                             | COARSE INDEX   | FINE INDEX   | COARSE RESISTOR (kΩ)   | FINE RESISTOR (kΩ)   | L MIN (μH)                    | COUTMIN (μF)                  |
| 0.9                                                   | 2              | 13           | 115                    | 4.75                 | 1                             | 100                           |
| 1.0                                                   | 3              | 2            | 75                     | 115                  | 1.2                           | 82                            |
| 1.2                                                   | 3              | 12           | 75                     | 6.81                 | 1.2                           | 68                            |
| 1.5                                                   | 4              | 11           | 53.6                   | 9.09                 | 1.5                           | 55                            |
| 2.0                                                   | 6              | 5            | 30.9                   | 40.2                 | 2.2                           | 41                            |
| 2.5                                                   | 7              | 14           | 24.3                   | 3.01                 | 2.2                           | 33                            |
| 3.0                                                   | 9              | 7            | 15.0                   | 24.3                 | 2.2                           | 18                            |
| 3.3                                                   | 10             | 7            | 11.8                   | 24.3                 | 2.2                           | 18                            |
| 5.0 (7V VIN) 5.0 (9V VIN) 5.0 (12V VIN) 5.0 (16V VIN) | 12 13          | 13           | 6.81                   | 4.75                 | 1.8                           | 18                            |
| 5.0 (7V VIN) 5.0 (9V VIN) 5.0 (12V VIN) 5.0 (16V VIN) |                | 13           | 4.75                   | 4.75                 | 2.7                           | 18                            |
| 5.0 (7V VIN) 5.0 (9V VIN) 5.0 (12V VIN) 5.0 (16V VIN) | 14             | 13           | 3.01                   | 4.75                 | 3.9                           | 18                            |
| 5.0 (7V VIN) 5.0 (9V VIN) 5.0 (12V VIN) 5.0 (16V VIN) | 15             | 13           | GND                    | 4.75                 | 4.7                           | 18                            |

│

## Evaluates:  MAX17509 4.5V-16V, Dual 3A Synchronous Buck Converter

Where  V OUTCOARSE   is  the  COARSE\_  closest  to  the value  of  V OUT ;  Index  is  the  index  number  selected  for the FINE resistor value from Table 1. Table 2 summarizes the  resistor  setting  and  the  optimal  inductor  and  output capacitor selection for typical output voltages for typical 12VIN   range.  Consult  the  MAX17509  IC  data  sheet's recommendation  on  the  inductance  and  capacitance value, as well as the guideline for the 5V IN  range.

## MAX17509 Evaluation Kit

## MAX17509 EV Bill of Materials

| REFERENCE                   |   QTY | DESCRIPTION                                                                                                                 |
|-----------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------|
| C2                          |     1 | CAPACITOR; SMT (1206); CERAMIC CHIP; 47µF; 16V; TOL = 20%; MODEL = C SERIES; TG = -55°C TO +85°C; TC = X5R                  |
| C4, C17                     |     2 | CAPACITOR; SMT (1206); CERAMIC CHIP; 100µF; 10V; TOL = 20%; MODEL = C SERIES; TG = -55°C TO +85°C; TC = X5R                 |
| C5, C8                      |     2 | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                   |
| C7, C12                     |     2 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                  |
| C9, C10                     |     2 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R                |
| C13                         |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = ; TG = -55°C TO +125°C; TC = X7R                          |
| C14                         |     1 | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                  |
| IN, OUT1, OUT2, PGND1-PGND3 |     6 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                    |
| L1                          |     1 | INDUCTOR; SMT; COMPOSITE CORE; 2.2µH; TOL = ±20%; 4A                                                                        |
| L2                          |     1 | INDUCTOR; SMT; COMPOSITE CORE; 1.5µH; TOL = ±20%; 5.2A                                                                      |
| LED1, LED2                  |     2 | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV = 5.0V; IF = 0.02A; -55°C TO +85°C                                            |
| R1, R2                      |     2 | RESISTOR; 0402; 30.9KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| R3, R10                     |     2 | RESISTOR; 0402; 19.1KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| R4, R9                      |     2 | RESISTOR; 0402; 10KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
| R5                          |     1 | RESISTOR; 0402; 11.8KΩ; 1%; 100PPM; 0.063W; METAL FILM                                                                      |
| R6                          |     1 | RESISTOR; 0402; 24.3KΩ; 1%; 50PPM; 0.063W; THIN FILM                                                                        |
| R7                          |     1 | RESISTOR; 0402; 6.81KΩ; 1%; 100PPM; 0.063W; METAL FILM                                                                      |
| R8                          |     1 | RESISTOR; 0402; 75KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                        |
| R11, R14                    |     2 | RESISTOR; 0402; 1KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| R13                         |     1 | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                       |
| R15, R16                    |     2 | RESISTOR; 0402; 42.2K; 1%; 100PPM; 0.0625W; THICK FILM                                                                      |
| R17, R18                    |     2 | RESISTOR; 0402; 49.9Ω; 1%; 100PPM; 0.0625W; THICK FILM                                                                      |
| SW1, SW2                    |     2 | SWITCH; SPDT; THROUGH HOLE; 28V; 0.1A; PROCESS SEALED ULTRA-MINIATURE TOGGLE; RCOIL = Ω; RINSULATION = 1G OHM; NKK SWITCHES |
| TP1                         |     1 | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
| U1                          |     1 | EVKIT PART - IC; MAX17509; TQFN32-EP 5X5; PKG. DWG. NO.: 21-0140; PKG CODE T3255+4                                          |
| C1, C6                      |     0 | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                    |
| C3, C15, C16                |     0 | PACKAGE OUTLINE 1206 NON-POLAR CAPACITOR                                                                                    |
| R12                         |     0 | PACKAGE OUTLINE 0402 RESISTOR                                                                                               |
| R19                         |     0 | RESISTOR; 0603 PACKAGE; GENERIC                                                                                             |
| PCB                         |     1 | PCB Board: MAX17509 EVALUATION KIT                                                                                          |

│

Evaluates:  MAX17509 4.5V-16V,

## Dual 3A Synchronous Buck Converter

## MAX17509 Evaluation Kit

## MAX17509 EV Schematic

<!-- image -->

│

## MAX17509 Evaluation Kit

## PCB Layout Diagrams

MAX17509 EV Kit-Top Silkscreen

<!-- image -->

MAX17509 EV Kit-Top

<!-- image -->

## Evaluates:  MAX17509 4.5V-16V, Dual 3A Synchronous Buck Converter

MAX17509 EV Kit-Bottom Silkscreen

<!-- image -->

MAX17509 EV Kit-Bottom

<!-- image -->

│

## MAX17509 Evaluation Kit

## PCB Layout Diagrams (continued)

MAX17509 EV Kit-Layer 2 GND

<!-- image -->

## Evaluates:  MAX17509 4.5V-16V, Dual 3A Synchronous Buck Converter

MAX17509 EV Kit-Layer 3 Power

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX17509EVKIT# | EV Kit |

## MAX17509 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------|-----------------|
|                 0 | 6/15            | Initial release                                                                 | -               |
|                 1 | 9/16            | Updated Bill of Materials and removed Typical Operating Characteristics section | 5-8             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates:  MAX17509 4.5V-16V,

## Dual 3A Synchronous Buck Converter