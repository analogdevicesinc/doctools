<!-- lastmod 2022-08-02 -->
## MAX20059 Evaluation Kit

## General Description

The MAX20059 EV kit is a proven design to evaluate the MAX20059  high-efficiency,  high-voltage,  synchronous step-down DC-DC converter IC in a TDFN package. The EV kit is optimized to generate a 5V output at load cur -rents up to 1A from a 48V input supply, and can be recon -figured  to  meet  other  system  requirements.  The  EV  kit features a 400kHz switching frequency. The EV kit can be used to monitor the IC's features, such as adjustable input undervoltage  lockout,  adjustable  soft-start,  adjustable switching  frequency,  adjustable  current  limit,  open-drain RESET signal, and external frequency synchronization.

## Benefits and Features

- Operates from 6.5V to 72V at 48V Nominal Input
- Meets Stringent OEM Module Power Consumption and Performance Specifications
- 5V Output Voltage at 400kHz Switching Frequency
- Up to 1A Output Current with Adjustable PeakCurrent Limit
- Jumpers for Quickly Adjusting Peak-Current Limit and Mode Selection
- Auxiliary Bootstrap LDO to Improve Efficiency
- Adjustable Soft-Start Time with External Capacitor
- Optimized Application Layout and Components for Quick Design Implementation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20059

## Quick Start

## Required Equipment

- MAX20059 EV kit
- Adjustable DC power supply
- Digital multimeter (DMM)
- Electronic load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are positioned to their default settings ( Table 1).
- 2) Preset the power supply to 48V. Disable the power supply.
- 3) Preset the electronic load to 500mA. Disable the electronic load.
- 4) Connect the positive lead of the power supply to the VIN PCB pad on the EV kit.
- 5) Connect the negative lead to the neighboring PGND PCB pad.
- 6) Connect the positive terminal of the electronic load to the VOUT PCB pad.
- 7) Connect the negative lead to the neighboring PGND2 PCB pad.
- 8) Enable the DC power supply.
- 9) Using the DMM, verify that voltage across the VOUT and PGND2 PCB pads is 5V.
- 10) Turn on the electronic load.
- 11) Verify that the voltage across the VOUT and PGND PCB pads is still close to 5V after load regulation.
- 12) Turn off the electronic load.
- 13) Turn off the power supply.

<!-- image -->

## Detailed Description

The MAX20059 5V output EV kit provides a proven design to  evaluate  the  MAX20059  high-efficiency,  high-voltage, synchronous step-down DC-DC converter IC. The EV kit generates  5V  at  load  currents  up  to  1A  from  a  6.5V  to 72V input supply. The EV kit features a 400kHz switching frequency  for  optimum  efficiency  and  component  size. The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The RT/SYNC\_IN PCB pad allows an external clock to syn -chronize the device while the IC is set to FPWM through jumper JU4 or JU5. A RESETB PCB pad is available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The  IC  implements  adjustable  soft-start  operation  to reduce  inrush  current  and  to  minimize  output-voltage overshoot during startup. A capacitor connected from the SS pin to SGND (C6 on the EV kit) programs the soft-start time for the corresponding output voltage. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine  the  minimum  required  soft-start  capacitor  as follows:

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

The device offers an adjustable-input undervoltage-lock -out  level.  For  always-on  operation,  no  shunt  should  be installed across JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 1 for JU1 default settings.

Set the voltage at which each converter turns on with a resistive  voltage-divider  connected  from  V IN   to  SGND. Connect the center node of the divider to the EN/UVLO pin. Choose R1 as follows:

<!-- formula-not-decoded -->

where V INU  is the input voltage at which the IC is required to  turn  on,  and  R1  is  measured  in  ohms.  Calculate  the value of R2 as follows:

<!-- formula-not-decoded -->

## Current Limit and Mode-of Operation Selection

Table 2 lists the values of the resistor R5 to program PWM or PFM modes of operation and 1.6A or 1.14A peak cur -rent limits.

On the EV kit, jumpers JU2-JU5 are connected to each of  the  above  values  for  easy  evaluation  of  each  mode and peak current limit. The mode of operation cannot be changed on-the-fly after power-up until the power supply is reset or the IC has been disabled.

## Table 2. RILIM Resistor vs. Modes of Operation and Peak Current Limit

| R ILIM (kΩ)   | MODE OF OPERATION   |   PEAK CURRENT LIMIT (A) |
|---------------|---------------------|--------------------------|
| OPEN          | PFM                 |                      1.6 |
| 422           | PFM                 |                     1.14 |
| 243           | PWM                 |                      1.6 |
| 121           | PWM                 |                     1.14 |

## Switching-Frequency Selection and External-Frequency Synchronization

The RT/SYNC pin programs the switching frequency of the  converter.  Resistor  R4  sets  the  switching  frequency of the part, and the EV kit is defaulted to 400kHz (105Ω). Table 3 shows some common frequencies and their cor -responding resistor values.

The internal oscillator of the MAX20059 can be synchro -nized  to  an  external  clock  signal  on  the  RT/SYNC  pin. The  external  synchronization  clock  frequency  must  be between 1.15 x f SW  and 1.4 x f SW , where f SW is the frequency programmed by R4. To use the external clock, the IC must be set to PWM mode.

## Table 3. Switching Frequency vs. RT Resistor

|   SWITCHING FREQUENCY (kHz) |   R T (kΩ) |
|-----------------------------|------------|
|                         200 |        210 |
|                         400 |        105 |
|                         600 |       69.8 |
|                        2000 |       19.1 |

Evaluates: MAX20059

## EXTVCC External Power Supply

The EV kit is  laid  out  so  that  EXTVCC  is  connected  to VOUT and the internal LDO can be powered more effi -ciently  at  higher  input  voltages.  To  protect  the  IC  from short-circuit events in which inductive ringing can cause the output voltage to go temporarily negative, an external RC  filter  is  implemented  in  the  design.  A  4.7Ω  resistor (R12) and 0.1µF capacitor (C7) are recommended.

For applications in which V OUT is less than 4.5V, EXTVCC should be shorted to ground and the RC filter does not need to be implemented. In this case, the internal LDO is always powered from the input voltage. To test this on the EV kit, remove R12 and then replace C7 with a 0Ω short.

## Inductor Selection and Suggested Values

While the detailed inductor calculations can be found in the  MAX20059  IC  data  sheet,  Table  4 summarizes  the suggested  ideal  inductor  values  for  common  configura -tions, calculated at 0.3 inductor-to-current ratio for com -mon V IN , V OUT , and switching-frequency combinations.

## Table 4. Recommended Inductor for Common Operating Conditions

|   NOMINAL V IN (V) |   V OUT (V) |   SWITCHING FREQUENCY (kHz) |   RECOMMENDED INDUCTOR (µH) |
|--------------------|-------------|-----------------------------|-----------------------------|
|                 48 |          12 |                         400 |                          75 |
|                 48 |           5 |                         400 |                          37 |
|                 48 |          12 |                        2000 |                          15 |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20059EVKIT# | EV kit |

# Denotes RoHS compliant.

## MAX20059 Evaluation Kit

## MAX20059 EV Kit Bill of Materials

|   QTY | REF DES                                                                     | VALUE          | DESCRIPTION                                                                                              | TEMP_RANGE      | MFG PART #           | MANUFACTURER          |
|-------|-----------------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------|-----------------|----------------------|-----------------------|
|     1 | C1                                                                          | 0.1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=- 55 ° TO +125 °; TC=X7R; AUTO             | -55 ° TO +125 ° | CGA4J2X7R2A104K125AA | TDK                   |
|     1 | C2                                                                          | 2.2UF          | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG=-55 ° to +125 °; TC=X7R  | -55 ° TO +125 ° | CGA6N3X7R2A225K230   | TDK                   |
|     1 | C3                                                                          | 22UF           | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL=20%; MODEL=TG SERIES; TG=-40 ° TO +125 ° | -40 ° TO +125 ° | EEE-TG2A220UP        | PANASONIC             |
|     1 | C4                                                                          | 47PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL=5%; TG=-55 ° TO +125 °; TC=C0G; AUTO                 | -55 ° TO +125 ° | CGA2B2C0G1H470J      | MURATA                |
|     1 | C5                                                                          | 1UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 ° TO +125 °; TC=X7R; AUTO                 | -55 ° TO +125 ° | CGA3E1X7R1C105K080AC | TDK                   |
|     1 | C6                                                                          | 0.012UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.012UF; 50V; TOL=10%; TG=-55 ° TO +125 °; TC=X7R                   | -55 ° TO +125 ° | GRM155R71H123KA12    | MURATA                |
|     1 | C7                                                                          | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 35V; TOL=10%; TG=- 55 ° TO +125 °; TC=X7R; AUTO              | -55 ° TO +125 ° | CGA2B3X7R1V104K050BB | TDK                   |
|     2 | C8                                                                          | 22UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF ; 16V; TOL=20%; TG=-                                           | -55 ° TO +125 ° | CGA6P1X7R1C226M      | TDK                   |
|       | C9                                                                          | DNP            | DO NOT POPULATE                                                                                          | -               | -                    | -                     |
|     1 | C10                                                                         | 4700PF         | CAPACITOR; SMT; 0402; CERAMIC; 4700pF; 50V; 5%; X7R; -55° to + 125°; 0 +/-15% ° MAX.                     | -55° to +125°   | C0402C472J5RAC       | KEMET                 |
|     1 | JU1                                                                         | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; NOTE: SET TO OBSOLETE DUE TO FOOTPRINT UPDATE | -65 ° TO +125 ° | PEC03SAAN            | SULLINS               |
|     4 | JU2, JU3, JU4, JU5                                                          | TSW-102-07-T-S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; - 55 ° TO +105 °                       | -55 ° TO +125 ° | TSW-102-07-T-S       | SAMTEC                |
|     1 | L1                                                                          | 33UH           | INDUCTOR; SMT; FERRITE CORE; 33UH; TOL=+/-20%; 1.45A                                                     | -40 ° TO +125 ° | 74404064330          | WURTH ELECTRONICS INC |
|     1 | R1                                                                          | 3.32M          | RESISTOR; 0402; 3.32M OHM; 1%; 100PPM; 0.063W; METAL FILM                                                | -55 ° TO +155 ° | CRCW04023M32FK       | VISHAY DALE           |
|     1 | R2                                                                          | 750K           | RESISTOR; 0402; 750K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                 | -55 ° TO +155 ° | CRCW0402750KFK       | VISHAY DALE           |
|     1 | R3                                                                          | 10K            | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                   | -55 ° TO +155 ° | ERJ-2RKF1002         | PANASONIC             |
|     1 | R4                                                                          | 105K           | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM                                                | -55 ° TO +155 ° | CRCW0402105KFK       | VISHAY DALE           |
|     1 | R5                                                                          | 95.3K          | RESISTOR; 0402; 95.3K; 1%; 100PPM; 0.0625W; THICK FILM                                                   | -55 ° TO +155 ° | CRCW040295K3FK       | VISHAY DALE           |
|     1 | R6                                                                          | 18.2K          | RESISTOR; 0402; 18.2K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                | -55 ° TO +155 ° | CRCW040218K2FK       | VISHAY DALE           |
|       | R7                                                                          | DNP            | DO NOT POPULATE                                                                                          | -               | -                    | -                     |
|     1 | R8                                                                          | 422K           | RESISTOR; 0402; 422K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                 | -55 ° TO +155 ° | CRCW0402422KFK       | VISHAY DALE           |
|     1 | R9                                                                          | 243K           | RESISTOR; 0402; 243K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  | -55 ° TO +125 ° | ERJ-2RKF2433X        | PANASONIC             |
|     1 | R10                                                                         | 121K           | RESISTOR; 0402; 121K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                   | -55 ° TO +155 ° | ERJ-2RKF1213         | PANASONIC             |
|     1 | R11                                                                         | 16.9K          | RESISTOR; 0402; 16.9K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                  | -55 ° TO +155 ° | CRCW040216K9FK       | VISHAY DALE           |
|     2 | R12                                                                         | 4.7            | RESISTOR; 0402; 4.7 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                   | -55 ° TO +155 ° | ERJ-2GEJ4R7X         | PANASONIC             |
|     1 | U1                                                                          | -              | MAX20059 72V, 1A, Automotive Synchronous Step-Down DC-DC Converter                                       | -40 ° TO +125 ° | MAX20059ATCA/VY+     | MAXIM                 |
|     1 | -                                                                           | -              | PCB: MAX20059 EVKIT                                                                                      | -               | MAX20059EVKIT#       | MAXIM                 |
|    10 | EN/UVLO, MODE/ILIM, PGND, PGND2, RESETB, RT/SYNC_IN, SGND, SGND2, VIN, VOUT | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                 | N/A             | 9020 BUSS            | WEICO WIRE            |

Evaluates: MAX20059

## MAX20059 EV Kit Schematic

<!-- image -->

## MAX20059 EV Kit PCB Layouts

MAX20059 EV Kit Component Placement Guide-Top

<!-- image -->

MAX20059 EV Kit Component Placement Guide-Bottom

<!-- image -->

## MAX20059 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX20059