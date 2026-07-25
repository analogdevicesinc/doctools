<!-- lastmod 2022-08-02 -->
## MAX20058 Evaluation Kit

## General Description

The MAX20058 EV kit is a proven design to evaluate the MAX20058  high-efficiency,  high-voltage,  synchronous step-down DC-DC converter in a TDFN package. The EV kit is optimized to generate a 5V output at load currents up to 1A from a 24V input supply and can be reconfigured to meet other system requirements. The EV kit features a 400kHz switching frequency. The EV kit can be used to monitor the IC's features such as adjustable input under -voltage lockout, adjustable soft-start, adjustable switching frequency,  adjustable  current  limit,  open-drain RESET signal, and external frequency synchronization.

## Features

- Operates from 6.5V to 60V at 24V Nominal Input
- Meets Stringent OEM Module Power Consumption and Performance Specifications
- 5V Output Voltage at 400kHz Switching Frequency
- Up to 1A Output Current with Adjustable Peak Current Limit
- Jumpers for Quickly Adjusting Peak Current Limit and Mode Selection
- Auxiliary Bootstrap LDO to Improve Efficiency
- Adjustable Soft-Start Time with External Capacitor
- Optimized Application Layout and Components for Quick Design Implementation
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20058

## Quick Start

## Required Equipment

- MAX20058 EV kit
- Adjustable DC power supply
- Digital multimeter (DMM)
- Electronic load

## Procedure

The EV kit is fully assembled and tested. Use the follow -ing the steps below to verify board operation:

- 1) Verify that all jumpers are positioned to their default settings ( Table 1).
- 2) Preset the power supply at a voltage to 24V. Disable the power supply.
- 3) Preset the electronic load to 500mA. Disable the electronic load.
- 4) Connect the positive lead of the power supply to the VIN pad on the EV kit. Then, connect the negative lead to the neighboring PGND PCB pad.
- 5) Connect the positive terminal of the electronic load to VOUT PCB pad. Then, connect the negative lead to the neighboring PGND2 PCB pad.
- 6) Enable the DC power supply.
- 7) Using the DMM, verify that the voltage across VOUT and PGND2 PCB pads is 5V.
- 8) Turn on the electronic load.
- 9) Verify that the voltage across VOUT1 and PGND PCB pads is still close to 5V after load regulation.
- 10) Turn off the electronic load.
- 11) Turn off the power supply.

<!-- image -->

## Detailed Description

The  MAX20058  5V  output  EV  kit  provides  a  proven design  to  evaluate  the  MAX20058  high-efficiency,  highvoltage,  synchronous  step-down  DC-DC  converter.  The EV kit generates 5V at load currents up to 1A from a 6.5V to 60V input supply. The EV kit features a 400kHz switch -ing  frequency  for  optimum  efficiency  and  component size. The EV kit includes an EN/UVLO PCB pad and JU1 to enable the output at a desired input voltage. The RT/ SYNC PCB pad allows an external clock to synchronize the device while the IC is set to FPWM through JU4 or JU5. A RESET PCB pad is available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The  device  implements  adjustable  soft-start  operation to  reduce  inrush  current  and  to  minimize  output  volt -age  overshoot  during  startup.  A  capacitor  connected from the SS pin to SGND (C6 on EV kit) programs the soft-start time for the corresponding output voltage. The selected output capacitance (CSEL) and the output volt -age  (VOUT)  determine  the  minimum  required  soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  con -nected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For  example,  to  program  a  2ms  soft-start  time,  a  12nF capacitor should be connected from the SS pin to SGND.

Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION     | FUNCTION             |
|----------|----------------------------|----------------------|
| JU1      | Installed, across pins 2-3 | Enable for VOUT      |
| JU2      | Open                       | PFM/1.6A peak ILIM   |
| JU3      | Open                       | PFM/1.14A peak ILIM  |
| JU4      | Installed                  | FPWM/1.6A peak ILIM  |
| JU5      | Open                       | FPWM/1.14A peak ILIM |

Note: Only 1 jumper between JU2-5 should be installed. For 3-pin connectors, pin 1 is denoted by a silkscreen circle.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The device offers an adjustable input undervoltage-lock -out  level.  For  always  on  operation,  no  shunt  should  be installed across JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 3 for JU1 settings.

Set the voltage at which each converter turns on with a resistive  voltage-divider  connected  from  VIN  to  SGND. Connect the center node of the divider to EN/UVLO pin. Choose R1 as follows:

<!-- formula-not-decoded -->

where VINU is the input voltage at which the MAX20058 is required to turn ON and R1 is in Ω. Calculate the value of R2 as follows:

<!-- formula-not-decoded -->

## Current Limit and Mode of Operation Selection

The following table lists the values of the resistor R5 to program PWM or PFM modes of operation and 1.6A or 1.14A peak current limits.

On the EV kit, jumpers JU2-JU5 are connected to each of  the  above  values  for  easy  evaluation  of  each  mode and peak current limit. The mode of operation cannot be changed on-the-fly  after  power-up  until  power  supply  is reset or the IC has been disabled.

## Table 2. RILIM Resistor vs. Modes of Operation and Peak Current Limit

| R ILIM (kΩ)   | MODE OF OPERATION   |   PEAK CURRENT LIMIT (A) |
|---------------|---------------------|--------------------------|
| OPEN          | PFM                 |                      1.6 |
| 422           | PFM                 |                     1.14 |
| 243           | PWM                 |                      1.6 |
| 121           | PWM                 |                     1.14 |

## Switching Frequency Selection and External Frequency Synchronization

The  RT/SYNC  pin  programs  the  switching  frequency of  the  converter. The resistor R4 sets the switching fre -quency of the part, and the EV kit is defaulted to 400kHz (105Ω).  The  following  table  shows  some  common  fre -quencies and their corresponding resistor values.

The internal oscillator of the MAX20058 can be synchro -nized  to  an  external  clock  signal  on  the  RT/SYNC  pin. The  external  synchronization  clock  frequency  must  be between 1.15 x f SW  and 1.4 x f SW , where f SW is the frequency programmed by R4. To use the external clock, the IC must be set to PWM mode.

## Table 3. Switching Frequency vs. RT Resistor

|   SWITCHING FREQUENCY (kHz) |   R T (kΩ) |
|-----------------------------|------------|
|                         200 |        210 |
|                         400 |        105 |
|                         600 |       69.8 |
|                        1800 |       23.3 |

Evaluates: MAX20058

## EXTVCC External Power Supply

The EV kit is  laid  out  so  that  EXTVCC  is  connected  to VOUT and the internal LDO can be powered more effi -ciently  at  higher  input  voltages.  To  protect  the  IC  from short-circuit  events  where  inductive  ringing  can  cause the output voltage to go temporarily negative, an external R-C filter is implemented in the design. A 4.7Ω (R12) and 0.1µF (C7) are recommended.

For applications where VOUT is less than 4.5V, EXTVCC should be shorted to ground and the R-C filter does not need to be implemented. In this case, the internal LDO is always powered from the input voltage. To test this on the EV kit, remove R12 and then replace C7 with a 0Ω short.

## Inductor Selection and Suggested Values

While the detailed inductor calculations can be found on the IC data sheet, Table 4 summarizes suggested ideal inductor values for common configurations, calculated at 0.3 inductor-to-current ratio for common VIN, VOUT, and switching frequency combinations.

## Table 4. Recommended Inductor for Common Operating Conditions

|   NOMINAL VIN (V) |   VOUT (V) |   SWITCHING FREQUENCY (kHz) |   RECOMMENDED INDUCTOR (µH) |
|-------------------|------------|-----------------------------|-----------------------------|
|                48 |         12 |                         400 |                          75 |
|                48 |          5 |                         400 |                          37 |
|                24 |         12 |                         400 |                          50 |
|                24 |         12 |                        1800 |                          12 |
|                24 |          5 |                         400 |                          33 |
|                24 |        3.3 |                         400 |                          24 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20058EVKIT# | EV kit |

# Denotes RoHS compliant.

## MAX20058 Evaluation Kit

## MAX20058 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                                  | MFG PART #                              | MANUFACTURER             | VALUE          | DESCRIPTION                                                                                                      | TEMP_RANGE        |
|--------|-------|--------------------------------------------------------------------------|-----------------------------------------|--------------------------|----------------|------------------------------------------------------------------------------------------------------------------|-------------------|
|      1 |     1 | C1                                                                       | CGA4J2X7R2A104K125AA                    | TDK                      | 0.1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                | -55 °C TO +125 °C |
|      2 |     1 | C2                                                                       | GRM32ER72A225KA35; CGA6N3X7R2A225K230   | MURATA/TDK               | 2.2UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +125°C; TC = X7R  | -55 °C TO +125 °C |
|      3 |     1 | C3                                                                       | EEE-TG2A220UP                           | PANASONIC                | 22UF           | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL = 20%; MODEL = TG SERIES; TG = -40 °C TO +125 °C | -40 °C TO +125 °C |
|      4 |     1 | C4                                                                       | CGA2B2C0G1H470J                         | MURATA                   | 47PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC=C0G; AUTO                     | -55 °C TO +125 °C |
|      5 |     1 | C5                                                                       | GCM188R71C105KA64; CGA3E1X7R1C105K080AC | MURATA; TDK              | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                   | -55 °C TO +125 °C |
|      6 |     1 | C6                                                                       | GRM155R71H123KA12                       | MURATA                   | 0.012UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.012UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                     | -55 °C TO +125 °C |
|      7 |     1 | C7                                                                       | CGA2B3X7R1V104K050BB                    | TDK                      | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                 | -55 °C TO +125 °C |
|      8 |     2 | C8                                                                       | CGA6P1X7R1C226M                         | TDK                      | 22UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF ; 16V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R; AUTO                 | -55 °C TO +125 °C |
|      9 |     1 | C10                                                                      | C0402C472J5RAC                          | KEMET                    | 4700PF         | CAPACITOR; SMT; 0402; CERAMIC; 4700pF; 50V; 5%; X7R; -55°C to +125°C; 0 ± 15%°C MAX.                             | -55°C to +125°C   |
|     11 |     1 | JU1                                                                      | PEC03SAAN                               | SULLINS                  | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; NOTE: SET TO OBSOLETE DUE TO FOOTPRINT UPDATE         | -65 °C TO +125 °C |
|     12 |     4 | JU2,JU3, JU4,JU5                                                         | TSW-102-07-T-S                          | SAMTEC                   | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                | -55 °C TO +125 °C |
|     13 |     1 | L1                                                                       | 74404064330                             | WURTH ELECTRONICS INC    | 33UH           | INDUCTOR; SMT; FERRITE CORE; 33UH; TOL = ± 20%; 1.45A                                                            | -40 °C TO +125 °C |
|     14 |     1 | R1                                                                       | CRCW04023M32FK                          | VISHAY DALE              | 3.32M          | RESISTOR; 0402; 3.32M Ω ; 1%; 100PPM; 0.063W; METAL FILM                                                         | -55 °C TO +155 °C |
|     15 |     1 | R2                                                                       | CRCW0402750KFK                          | VISHAY DALE              | 750K           | RESISTOR; 0402; 750K Ω ; 1%; 100PPM; 0.063W; METAL FILM                                                          | -55 °C TO +155 °C |
|     16 |     1 | R3                                                                       | ERJ-2RKF1002                            | PANASONIC                | 10K            | RESISTOR; 0402; 10K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                            | -55 °C TO +155 °C |
|     17 |     1 | R4                                                                       | CRCW0402105KFK                          | VISHAY DALE              | 105K           | RESISTOR; 0402; 105K Ω ; 1%; 100PPM; 0.063W ; THICK FILM                                                         | -55 °C TO +155 °C |
|     18 |     1 | R5                                                                       | CRCW040295K3FK                          | VISHAY DALE              | 95.3K          | RESISTOR; 0402; 95.3K Ω ; 1%; 100PPM; 0.0625W; THICK FILM                                                        | -55 °C TO +155 °C |
|     19 |     1 | R6                                                                       | CR0402-16W-1822FT; CRCW040218K2FK       | VENKEL LTD./ VISHAY DALE | 18.2K          | RESISTOR; 0402; 18.2K Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                         | -55 °C TO +155 °C |
|     21 |     1 | R8                                                                       | CRCW0402422KFK                          | VISHAY DALE              | 422K           | RESISTOR; 0402; 422K Ω ; 1%; 100PPM; 0.063W; METAL FILM                                                          | -55 °C TO +155 °C |
|     22 |     1 | R9                                                                       | ERJ-2RKF2433X                           | PANASONIC                | 243K           | RESISTOR; 0402; 243K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                           | -55 °C TO +125 °C |
|     23 |     1 | R10                                                                      | ERJ-2RKF1213                            | PANASONIC                | 121K           | RESISTOR; 0402; 121K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                            | -55 °C TO +155 °C |
|     24 |     1 | R11                                                                      | CRCW040216K9FK                          | VISHAY DALE              | 16.9K          | RESISTOR; 0402; 16.9K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                           | -55 °C TO +155 °C |
|     20 |     2 | R12                                                                      | ERJ-2GEJ4R7X                            | PANASONIC                | 4.7            | RESISTOR; 0402; 4.7 Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                            | -55 °C TO +155 °C |
|     25 |     1 | U1                                                                       | MAX20058ATCA/VY+                        | MAXIM                    | MAX20058       | 60V, 1A, Automotive Synchronous Step-Down DC-DC Converter                                                        | -40 °C TO +125 °C |
|     10 |    10 | EN/UVLO, MODE/ILIM,PGND, PGND2,RESETB, RT/SYNC_IN, SGND,SGND2, VIN, VOUT | 9020 BUSS                               | WEICO WIRE               | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         | N/A               |

Evaluates: MAX20058

## MAX20058 EV Schematic

<!-- image -->

## MAX20058 EV PCB Layout

Component Placement Guide-Top

<!-- image -->

Component Placement Guide-Bottom

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX20058