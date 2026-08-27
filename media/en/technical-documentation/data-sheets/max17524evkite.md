<!-- lastmod 2022-08-02 -->
## MAX17524EVKITE# Evaluation Kit

## General Description

The  MAX17524EVKITE#  (EV  kit)  provides  a  proven design  to  evaluate  the  MAX17524  high-efficiency,  highvoltage,  synchronous step-down dual DC-DC converter. The EV kit is preset to generate 3.3V and 5V output volt -ages, at load currents up to 3A per converter and features a  450kHz  switching  frequency  for  optimum  efficiency and  component  size.  The  EV  kit  features  adjustable input  undervoltage  lockout,  adjustable  soft-start,  opendrain RESET signal, and external clock synchronization. The  EV  kit  also  provides  a  good  layout  example  that is  optimized  for  conducted,    radiated  EMI  and  thermal performance. For more details about the IC benefits and features, refer to MAX17524 IC data sheet.

## Features

- Operates from a 6.5V to 60V Input Supply
- Dual Output Voltage: 3.3V and 5V
- Up to 3A Output Current per Converter
- 450kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- MODE/SYNC Pin to Select Among PWM, PFM, or DCM Modes
- Open-Drain RESET Output
- External Clock Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application

## Quick Start

## Recommended Equipment

- MAX17524EVKITE#
- 6.5V to 60V, 5A DC-input power supply
- Two loads capable of sinking 3A
- Four digital voltmeters (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution: Do not turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 60V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN1  PCB  pad  and  the  negative  terminal  to the  nearest  PGND  PCB  pad.  Connect  the  positive terminal of the 3A load to the VOUT1 PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the other 3A load to the VOUT2 PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVMs across the VOUT1 PCB pad and the nearest PGND PCB pad, and across the VOUT2 PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jump -er JU4 and pins 1-2 on JU5 (see Table 1 and Table 2).
- 5) Select  the  shunt  position  on  jumper  JU1  and  JU2 according  to  the  intended  mode  of  operation  (see Table 3 and Table 4).
- 6) Verify that the shunt is connected across pins 1-2 on jumper JU3 (see Table 6 for details).
- 7) Turn on the DC power supply.
- 8) Enable the loads.
- 9) Verify that the DVMs display 3.3V and 5V.
- 10) Connect  two  DVMs  across  the RESET1 pad  and SGND, and RESET2 pad and SGND. Verify that the DVMs display 5V.
- 11) Reduce the input voltage to 5V, which is below the EN/UVLO falling threshold.
- 12) Verify  that  the  DVMs  across  the  VOUT1  pad  and nearest PGND, and VOUT2 pad and nearest PGND display 0V.

<!-- image -->

## MAX17524EVKITE# Evaluation Kit

- 13) Verify  that  the  DVMs  across  the RESET1 pad  and nearest SGND, and RESET2 pad and nearest SGND display 0V.
- 14) Disable the input.

## Detailed Description

The  MAX17524EVKITE#  provides  a  proven  design  to evaluate  the  MAX17524  high-efficiency,  high-voltage, synchronous step-down dual DC-DC converter. The EV kit generates a fixed 3.3V and 5V, at load currents up to 3A per channel, from a 6.5V to 60V input supply. The EV kit  features a 450kHz fixed switching frequency for opti -mum efficiency and component size.

This EV kit includes an EN/UVLO PCB pad and JU4, JU5 to enable the two outputs at a desired input voltage. The MODE/SYNC1  PCB  pad  and  JU1,  and  MODE/SYNC2 PCB pad and JU2 allow an external clock to synchronize the  respective  channels.  The  EV  kit  features  individual mode-of-operation  selector  pins,  adjustable  input  under -voltage lockout (EN/UVLO) pins, adjustable soft-start pins, and open-drain RESET signals for each output channel.

## Soft-Start Input (SS)

The  EV  kit  offers  an  adjustable  soft-start  operation for  each  output  to  reduce  inrush  current.  Capacitors connected from the SS pins to SGND (C SS ) program the soft-start time for the corresponding output voltages. The selected output capacitance (C SEL )  and the output voltage  (V OUT )  determine  the  minimum  required  soft-start capacitor as follows:

<!-- formula-not-decoded -->

The  soft-start time  (t SS ) is  related  to  the  capacitor connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

Figure 1. Setting the Input Undervoltage Lockout

<!-- image -->

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

For  example,  to  program  a  1ms  soft-start  time  on  one channel, a 5.6nF capacitor should be connected from the corresponding SS pin to SGND.

## Enable/Undervoltage-Lockout (EN/UVLO1, EN/UVLO2) Programming

The  MAX17524  offers  an  enable  and  adjustable  input undervoltage-lockout  level  for  each  converter.  In  this EV  kit  leave  EN/UVLO  jumpers,  JU4  and  JU5  (for  the converter  1  and  converter  2,  respectively)  in  the  open position for the normal operation of the converters. When JU4 and JU5 are left open, the MAX17524 converters are enabled when the input voltage rises above 6.5V. To dis -able converter 1 and converter 2, install a jumper across pins  2-3  on  JU4  and  JU5,  appropriately.  See  Table  1 and Table 2 for jumper settings. The EN/UVLO1 and EN/ UVLO2 PCB pads on the EV kit support external enable /disable  control  of  the  converters.  Leave  JU4  and  JU5 open when external enable/disable control is desired. Set the voltage at which the converter turns on with a resistive voltage-divider connected from the respective input (VIN1 and VIN2) to SGND. Connect the center node of the divid -er to the relevant EN/UVLO pins as shown in Figure 1.

Choose  R TOP   to  be  3.32MΩ  max,  and  then  calculate RBOT as follows:

<!-- formula-not-decoded -->

where

V INU  is the voltage at which the converter is required to turn on

RTOP and R BOT  are in kΩ

For more details about setting the undervoltage lockout level, refer to the MAX17524 data sheet.

## Table 1. Converter 1 (EN/UVLO1) Jumper (JU4) Settings

| SHUNT POSITION   | EN/UVLO1 PIN                                               | MAX17524 CONVERTER 1                                    |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to IN1                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

* Default position

## MAX17524EVKITE# Evaluation Kit

## Mode Selection (MODE/SYNC1, MODE/SYNC2)

The EV Kit provide jumpers (JU1 and JU2, for the con -verter  1  and  converter  2,  respectively)  that  allow  the MAX17524 converters to operate in PWM, PFM and DCM modes.  Refer  to  MAX17524  datasheet  for  more  details on the modes of operation. Table 3 and Table  4  shows the Mode Selection (JU1 and JU2) settings that can be used to configure the desired mode of operation for each converter.

## External Clock Synchronization (MODE/SYNC1, MODE/SYNC2)

The EV Kit provides MODE/SYNC1 and MODE/SYNC2 PCB  pads,  to  individually  synchronize  the  MAX17524 converters to an optional external clock. Leave Jumpers (JU1  and  JU2)  open  when  external  clock  signals  are applied.    In  the  presence  of  a  valid  external  clock  for synchronization,  the  MAX17524  converters  operate  in PWM mode only.  For more details about external clock synchronization, refer to the MAX17524 data sheet.

## Table 2. Converter 2 (EN/UVLO2) Jumper (JU5) Settings

| SHUNT POSITION   | EN/UVLO2 PIN                                               | MAX17524 CONVERTER 2                                    |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2*             | Connected to IN2                                           | Enabled                                                 |
| Not installed    | Connected to the center node of resistor-divider R3 and R4 | Enabled, UVLO level set through the R3 and R4 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

## Table 3. Mode Selection Jumper (JU1) Settings

| SHUNT POSITION   | MODE/ SYNC1 PIN   | MAX17524 CONVERTER 1 MODE   |
|------------------|-------------------|-----------------------------|
| Not installed    | Unconnected       | PFM mode of operation       |
| 1-2*             | Connected to SGND | PWM mode of operation       |
| 2-3              | Connected to VCC1 | DCM mode of operation       |

* Default position

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

## Active-Low, Open-Drain Reset Output (RESET1 and RESET2 )

The  EV  kit  provides RESET1 and RESET2 PCB  pads to  monitor  the  status  of  the  converters. RESET1 and RESET2 goes  high  respectively,  when  VOUT1  and VOUT2 rise above 95% (typ) of their nominal regulated output  voltage. RESET1 and RESET2 goes  low  when VOUT1 and VOUT2 falls below 92% (typ) of their nominal regulated voltage.

## Converter 2 Input Supply (IN2) Connection

By default, the converter 2 input supply is derived from the  converter  1  input  supply,  through  a  jumper  resistor connection  RIN1.  The  MAX17524EVKITE#  PCB  layout has also the provision at VIN2 PCB pad, to power up the converter 2 through a second supply by removing RIN1 and placing a jumper resistor on RIN2. Table 5 shows the converter 2 input supply connection settings.

## Table 4. Mode Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/ SYNC2 PIN   | MAX17524 CONVERTER 2 MODE   |
|------------------|-------------------|-----------------------------|
| Not installed    | Unconnected       | PFM mode of operation       |
| 1-2*             | Connected to SGND | PWM mode of operation       |
| 2-3              | Connected to VCC2 | DCM mode of operation       |

* Default position

## Table 5. Converter 2 Input (IN2) Connection Settings

| RIN1 CONNECTION   | RIN2 CONNECTION   | CONVERTER 2 INPUT (IN2) CONNECTION         |
|-------------------|-------------------|--------------------------------------------|
| Jumper Resistor*  | Open              | Derived from IN1                           |
| Open              | Jumper resistor   | Through a supply connected at VIN2 PCB Pad |

## MAX17524EVKITE# Evaluation Kit

## Converter 2 EXTVCC Pin Connection

The  EV  kit  provides  a  jumper  connection  to  the  pin EXTVCC2 from the output voltage node of the converter 1 (VOUT1) for the improved efficiency. The EXTVCC2 pin can be grounded to disable its functionality. Table 6 shows the EXTVCC2 connection settings. For more details about EXTVCC2, refer to the MAX17524 data sheet.

## Table 6. EXTVCC2 Connection Jumper (JU3) Settings

| SHUNT POSITION   | EXTVCC2 PIN        | SETTING                       |
|------------------|--------------------|-------------------------------|
| Not installed    | Unconnected        | Not recommended               |
| 1-2*             | Connected to VOUT1 | Improved efficiency           |
| 2-3              | Connected to SGND  | EXTVCC functionality disabled |

* Default position

## Evaluates: MAX17524 Dual-Output Voltage 3.3V and 5V Application

## Hot Plug-In and Long Input Cables

The MAX17524EVKITE# PCB layout provides an optional electrolytic capacitor (C9 = 47μF/80V). In the default EV kit  configuration (RIN2 in an open position), this capaci -tor limits the peak voltage at the inputs of the MAX17524 converters  when  the  DC  input  source  is  hot-plugged  to the  EV  kit  input  terminals  with  long  input  cables.  The equivalent  series  resistance  (ESR)  of  the  electrolytic capacitor  dampens  the  oscillations  caused  by  interac -tion  of  the  inductance  of  the  long  input  cables,  and  the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency  cur -rents drawn by the switching power converter, and limits the noise injected back into the input power source.

The MAX17524EVKITE# PCB has designated footprints on  the  EV  kit  for  placement  of  EMI  filter  components. Use  of  these  filter  components  results  in  lower  con -ducted  EMI,  below  CISPR22  Class  B  limits.  Cut  open the  trace  at  L3  before  installing  EMI  filter  components. The  MAX17524EVKITE#  PCB  layout  is  also  designed to  limit  radiated  emissions  from  switching  nodes  of  the power converters, resulting in radiated emissions below CISPR22 Class B limits.

## MAX17524EVKITE# Performance Report

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

## MAX17524EVKITE# Performance Report (continued)

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

CONDITIONS: 3.3V OUTPUT, PFM MODE, JU3 CONNECTION: 2-3

CONDITIONS: 3.3V OUTPUT, PWM MODE, JU3 CONNECTION: 2-3

<!-- image -->

CONDITIONS: 3.3V OUTPUT, DCM MODE, JU3 CONNECTION: 2-3

<!-- image -->

## MAX17524EVKITE# Performance Report (continued)

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17524EVKITE# Performance Report (continued)

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

CONDITIONS: 3.3V OUTPUT, 3A LOAD

<!-- image -->

<!-- image -->

## MAX17524EVKITE# Performance Report (continued)

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

<!-- image -->

## SOFT-START/SHUTDOWN THROUGH EN/UVLO

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, 1.66Ω RESISTIVE LOAD

## SOFT-START/SHUTDOWN THROUGH EN/UVLO

<!-- image -->

<!-- image -->

SOFT-START WITH PREBIAS VOLTAGE OF 2.5V

<!-- image -->

CONDITIONS: 5V OUTPUT, PWM MODE, 1kΩ RESISTIVE LOAD

SOFT-START WITH PREBIAS VOLTAGE OF 1.65V

<!-- image -->

## MAX17524EVKITE# Evaluation Kit

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application

## MAX17524EVKITE# Performance Report (continued)

(V IN1  = 24V, R IN1 =  0Ω, R IN2  = open, f SW  = 450kHz, T A = 25°C, unless otherwise noted.)

TUV Rheinland Final\_ScanV

<!-- image -->

RE 30MHz-1GHz\_0-360deg\_90 dge step\_1-4 mtr height\_Quick Scan\_MAX17524\_Test5.TIL

02:59:56 PM, Tuesday, March 19, 2019

## Component Suppliers

| SUPPLIER        | WEBSITE                |
|-----------------|------------------------|
| Coilcraft, Inc. | www.coilcraft.com      |
| Murata Americas | www.murataamericas.com |
| Panasonic Corp. | www.panasonic.com      |
| Vishay          | www.vishay.com         |
| TDK             | www.tdk.com            |
| Taiyo Yuden     | www.yuden.co.jp/eu/    |

Note: Indicate that you are using the MAX17524 when contacting these component suppliers.

CONDUCTEDEMISSIONSPLOT, 5VAND3.3VOUTPUTS,3ALOADCURRENTSEACH

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17524EVKITE# | EV Kit |

#Denotes RoHS compliance.

## MAX17524EVKITE# Evaluation Kit

## MAX17524EVKITE# Bill of Materials

|   S.No | DESIGNATOR                                 | DESCRIPTION                                               |   QUANTITY | MANUFACTURER PART NUMBER         |
|--------|--------------------------------------------|-----------------------------------------------------------|------------|----------------------------------|
|      1 | C1                                         | 220pF, 5%, 100V, COG, Ceramic capacitor (0603)            |          1 | TDK C1608C0G2A221J080AA          |
|      2 | C2, C11, C27                               | 0.1μF, 10%, 100V, X7R,Ceramic capacitor (0603)            |          3 | TAIYO YUDEN HMK107B7104KA-T      |
|      3 | C9                                         | 47uF, 20%, 80V, Electrolytic capacitor                    |          1 | PANASONIC EEE-FK1K470P           |
|      4 | C10, C26                                   | 4.7μF, 10%, 100V, X7R,Ceramic capacitor (1206)            |          2 | MURATA GRM31CZ72A475KE11         |
|      5 | C14, C30, C31                              | 47μF, 10%, 10V, X7R,Ceramic capacitor (1210)              |          3 | MURATA GRM32ER71A476KE15         |
|      6 | C15                                        | 22μF, 20%, 25V, X7R,Ceramic capacitor (1210)              |          1 | MURATA GRM32ER71E226ME15         |
|      7 | C19, C21, C35, C37                         | 0.1μF, 10%, 16V, X7R,Ceramic capacitor (0402)             |          4 | TAIYO YUDEN EMK105B7104KV-F      |
|      8 | C23, C39                                   | 0.1μF, 10%, 50V, X7R,Ceramic capacitor (0402)             |          2 | MURATA GRM155R71H104KE14         |
|      9 | C24, C40                                   | 2.2μF, 10%, 10V, X7R,Ceramic capacitor (0603)             |          2 | MURATA GRM188R71A225KE15         |
|     10 | C25, C41                                   | 5600pF, 10%, 25V, X7R,Ceramic capacitor (0402)            |          2 | MURATA GRM155R71E562KA01         |
|     11 | L1                                         | Inductor, 10μH, 7A (6mm X 6mm)                            |          1 | COILCRAFT XAL6060-103ME          |
|     12 | L2                                         | Inductor, 6.8μH, 9A (6mm X 6mm)                           |          1 | COILCRAFT XAL6060-682ME          |
|     13 | Q1, Q2                                     | MOSFET (80V, 30A) (3.3mm X 3.3mm)                         |          2 | VISHAY SILICONIX SIS468DN-T1-GE3 |
|     14 | R1, R3                                     | 3.32MΩ, ±1%, 1/10W, Resistor (0603)                       |          2 |                                  |
|     15 | R2, R4                                     | 768kΩ, ±1%, 1/10W, Resistor (0603)                        |          2 |                                  |
|     16 | R5                                         | 140kΩ, ±1%, 1/10W,Resistor (0402)                         |          1 |                                  |
|     17 | R6                                         | 30.9kΩ, ±1%, 1/16W, Resistor (0402)                       |          1 |                                  |
|     18 | R7                                         | 100kΩ, ±1%, 1/16W, Resistor (0402)                        |          1 |                                  |
|     19 | R8                                         | 37.4kΩ, ±1%, 1/16W, Resistor (0402)                       |          1 |                                  |
|     20 | R9, R10, R16, R17                          | 10kΩ, ±1%, 1/16W, Resistor (0402)                         |          4 |                                  |
|     21 | R12, R13                                   | 0Ω, ±5%, 1/16W, Resistor (0402)                           |          2 |                                  |
|     22 | R14, R15                                   | 4.7Ω, ±1%, 1/16W, Resistor (0402)                         |          2 |                                  |
|     23 | RIN1                                       | 0Ω, ±5%, 1/2W, Resistor (0805)                            |          1 |                                  |
|     24 | U1                                         | Dual Buck Converter, MAX17524, 32 TQFN (5mm x 5mm)        |          1 | MAXIM MAX17524ATJ+               |
|     25 | JU1, JU2, JU3, JU4, JU5                    | 3-pin header (36-pin header 0.1' centers)                 |          5 | SULLINS PEC03SAAN                |
|     26 | L3                                         | OPTIONAL: Inductor, 15μH, 2.2A (4mm x 4mm)                |          1 | COILCRAFT XAL4040-153ME          |
|     27 | C6, C8                                     | OPTIONAL: 2.2µF, 10%, 100V, X7R, Ceramic capacitor (1210) |          2 | TAIYO YUDEN HMK325B7225KM-P      |
|     28 | C3, C12, C16, C17, C22, C29, C32, C33, C38 | OPEN: Capacitor (0402)                                    |          0 | N/A                              |
|     29 | C4, C13, C18, C28, C34                     | OPEN: Capacitor (0603)                                    |          0 | N/A                              |
|     30 | C5, C7, C20, C36                           | OPEN: Capacitor (1210)                                    |          0 | N/A                              |
|     31 | R11                                        | OPEN: Resistor (0402)                                     |          0 | N/A                              |
|     32 | RIN2                                       | OPEN: Resistor (0805)                                     |          0 | N/A                              |

| DEFAULT JUMPER TABLE    | DEFAULT JUMPER TABLE   |
|-------------------------|------------------------|
| Jumper                  | Shunt Position         |
| JU1, JU2, JU3, JU4, JU5 | 1-2 Short              |

## MAX17524EVKITE# Schematic

<!-- image -->

## MAX17524EVKITE# Evaluation Kit

## MAX17524EVKITE# PCB Layout

MAX17524EVKITE# PCB-Top Silkscreen

<!-- image -->

MAX17524EVKITE# PCB-Top Layer

<!-- image -->

## MAX17524EVKITE# PCB Layout (continued)

MAX17524EVKITE# PCB-Layer 2

<!-- image -->

MAX17524EVKITE# PCB-Layer 3

<!-- image -->

## MAX17524EVKITE# PCB Layout (continued)

MAX17524EVKITE# PCB-Bottom Layer

<!-- image -->

MAX17524EVKITE# PCB-Bottom Silkscreen

<!-- image -->

## MAX17524EVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17524 Dual-Output

Voltage 3.3V and 5V Application