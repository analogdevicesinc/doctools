<!-- lastmod 2022-08-02 -->
## MAX17632C5EVKITE# Evaluation Kit

## General Description

The MAX17632C5EVKITE#  evaluation kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX17632C high-efficiency,  synchronous  step-down  DC-DC convert -er. The EV kit provides 5V/2A at the output from a 6.5V to 36V input supply. The switching frequency of the EV kit is preset to 400kHz for optimum efficiency and component size.  The  EV  kit  features  adjustable  input  undervoltage lockout,  adjustable  soft-start,  open-drain RESET signal, and external clock synchronization. The EV kit also provides a good layout example, which is optimized for conducted,  radiated EMI and thermal performance. For more details about the IC benefits and features, refer to the MAX17632 IC data sheet.

## Features

- Operates from a 6.5V to 36V Input Supply
- 5V Output Voltage
- Delivers Up to 2A Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- Open-Drain RESET Output
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Complies with CISPR-22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

## Evaluates: MAX17632 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17632C5EVKITE# EV kit
- 6.5V to 36V, 2A DC-input power supply
- Load capable of sinking 2A
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 36V. Then, disable the power supply.
- 2) Connect  the  positive  terminal  of  the  power  supply to  the  VIN  PCB  pad  and  the  negative  terminal  to the  nearest  PGND  PCB  pad.  Connect  the  positive terminal of the 2A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify  that  shunts  are  installed  across  pins  1-2  on jumper JU1 (see Table 1 for details) and pins 2-3 on jumper JU2 (see Table 2 for details)
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V.

<!-- image -->

## MAX17632C5EVKITE# Evaluation Kit

## Detailed Description

The EV kit is designed to deliver 5V at load current up to 2A at the output from a 6.5V to 36V input supply. The switching frequency of the EV kit is configured at 400 kHz by leaving RT resistor open.

The EV kit includes an EN/UVLO PCB pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC PCB pad and jumper JU2 allow an external clock to synchronize the device. Jumper JU2 allows the selection  of  the  mode  of  operation  based  on  light  loadperformance  requirements.  An  additional RESET PCB pad  is  available  for  monitoring  whether  the  converter output is in regulation or not.

## Soft-Start Input (SS)

The EV kit offers an adjustable soft-start function to limit inrush  current  during  the  startup.  The  soft-start  time  is adjusted by the value of external soft-start capacitor (C3) connected between SS and SGND. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the minimum value of C3, as shown by the following equation:

<!-- formula-not-decoded -->

The soft-start time (t SS ) is related to the soft-start capaci -tor C3 by the following equation:

<!-- formula-not-decoded -->

## Evaluates: MAX17632 5V Output-Voltage Application

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX17632  offers  an  Enable  and  adjustable  input undervoltage-lockout  feature.  In  this  EV  kit,  for  normal operation, leave the EN/UVLO jumper (JU1) open.  When JU1  is  left  open,  the  MAX17632  is  enabled  when  the input voltage rises above 6.4V. To disable the MAX17632, install  a  jumper  across  pins  2 -3  on  JU1.  See Table  1 for  JU1 settings. The EN/UVLO PCB pad on the EV kit supports  external  Enable/Disable  control  of  the  device. Leave JU1 open when external Enable/Disable control is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 is left open.

Choose R1 to be 3.32MΩ and then calculate R2 as follows:

<!-- formula-not-decoded -->

where V INU  is voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

## Mode Selection (MODE/SYNC)

The  EV  kit  provides  a  jumper  (JU2)  that  allows  the MAX17632 to operate in PWM, PFM, and DCM modes. Refer to the MAX17632 data sheet for more details on the modes of operation.

Table 2 shows the mode selection (JU2) settings that can be used to configure the desired mode of operation.

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

Table 1. Converter EN/UVLO Jumper (JU1) Settings

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17632C OUTPUT                                                        |
|------------------|------------------------------------------------------------|-------------------------------------------------------------------------|
| 1-2*             | Connected to VIN                                           | Enabled                                                                 |
| Not installed    | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level is set by the resistor-divider between VIN and SGND |
| 2-3              | Connected to SGND                                          | Disabled                                                                |

* Default position.

## Table 2. MODE Selection Jumper (JU2) Settings

| SHUNT POSITION   | MODE/SYNC PIN     | MAX17632C OUTPUT      |
|------------------|-------------------|-----------------------|
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |
| Not installed    | OPEN              | PFM mode of operation |

## MAX17632C5EVKITE# Evaluation Kit

## External Clock Synchronization (MODE/SYNC)

The  EV  kit  provides  a  MODE/SYNC  PCB  pad,  to synchronize the MAX17632 to an optional external clock. Leave  Jumper  (JU2)  open  when  the  external  clock signals are applied.  In the presence of a valid external clock  for  synchronization,  the  MAX17632  operates  in PWM mode only.  For more details about external clock synchronization, refer to the MAX17632 data sheet.

## Active-Low, Open-Drain Reset Output (RESET)

The EV kit  provides  a RESET PCB  pad  to  monitor  the status  of  the  converter. RESET goes  high  when  VOUT rises  above  95%  (typ)  of  its  nominal  regulated  output voltage. RESET goes  low  when  VOUT falls below 92% (typ) of its nominal regulated voltage.

## Hot Plug-In and Long Input Cables

The  MAX17632C5EVKITE#  PCB  layout  provides  an optional  electrolytic  capacitor  (C6  =  47μF/50V).  This capacitor  limits  the  peak  voltage  at  the  input  of  the

## Component Suppliers

| SUPPLIER       | WEBSITE             |
|----------------|---------------------|
| Coilcraft      | www.coilcraft.com   |
| MurataAmericas | www.murata.com      |
| Panasonic      | www.panasonic.com   |
| TDK Corp.      | www.tdk.com         |
| Taiyo Yuden    | www.ty-top.com      |
| SullinsCorp    | www.sullinscorp.com |

Note: Indicate that you are using the MAX17632C when contacting these component suppliers.

## Evaluates: MAX17632 5V Output-Voltage Application

MAX17632C  IC  when  the  DC  input  source  is  'HotPlugged'  to  the  EV  kit  input  terminals  with  long  input cables.  The  equivalent  series  resistance  (ESR)  of  the electrolytic capacitor dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Electromagnetic Interference (EMI)

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter.  The  EMI  filter  attenuates  high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

The MAX17632C5EVKIT# PCB has designated footprints on the bottom side for placement of EMI filter components. Use of these filter components results in lower conducted emissions below CISPR22 Class B limits. Cut open the trace  at  L2  before  installing  EMI  filter  components. The MAX17632C5EVKIT# PCB layout is also designed to limit radiated  emissions  from  switching  nodes  of  the  power converter resulting in radiated emissions below CISPR22 Class B limits.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX17632C5EVKITE# | EVKIT  |

## MAX17632C EV Kit Performance Report

(V IN  = 24V, L = 10µH (XAL5050-103ME) for PWM/DCM mode, 15µH (XAL6060-153ME) for PFM mode, unless otherwise noted.)

20mV/div

<!-- image -->

Evaluates: MAX17632

5V Output-Voltage Application

## MAX17632C EV Kit Performance Report (continued)

(V IN  = 24V, L = 10µH (XAL5050-103ME) for PWM/DCM mode, 15µH (XAL6060-153ME) for PFM mode, unless otherwise noted.)

<!-- image -->

01:26:38 PM, Wednesday, November 28, 2018

Evaluates: MAX17632

5V Output-Voltage Application

## MAX17632C5EVKITE# Kit Bill of Materials

|   No. | Designator       | Description                                                                    |   Quantity | Part Number                 |
|-------|------------------|--------------------------------------------------------------------------------|------------|-----------------------------|
|     1 | C1               | 4.7µF, 10%, 50V, X7R,Ceramic capacitor (1206)                                  |          1 | MURATA GRM31CR71H475KA12    |
|     2 | C2               | 2.2µF, 10%, 10V, X7R, Ceramic capacitor (0603)                                 |          1 | MURATA GRM188R71A225KE15    |
|     3 | C3               | 5600pF, 10%, 25V, X7R, Ceramic capacitor (0402)                                |          1 | MURATA GRM155R71E562KA01    |
|     4 | C4               | 22µF, 10%, 10V, X7R,Ceramic capacitor (1210)                                   |          1 | MURATA GRM32ER71A226K       |
|     5 | C5,C10           | 0.1µF, 10%, 16V, X7R,Ceramic capacitor (0402)                                  |          2 | TAIYO YUDEN EMK105B7104KV   |
|     6 | C6               | 47uF, 20%, 50V, Electrolytic capacitor                                         |          1 | PANASONIC EEE-TG1H470UP     |
|     7 | C11,C15          | 150pF, 5%, 100V, X7R, Ceramic capacitor(0402)                                  |          2 | TDK C1005C0G2A151J050BA     |
|     8 | C9               | 0.1μF, 10%, 50V, X7R, Ceramic capacitor (0402)                                 |          1 | TDK C1005X7R1H104K050BE     |
|    10 | L1               | INDUCTOR, 10µH, 4.9A (5mm x 5mm)                                               |          1 | COILCRAFT XAL5050-103ME     |
|    11 | R1               | RES+, 3.32M Ω, 1% (0402)                                                       |          1 | VISHAY DALE CRCW04023M32FK  |
|    12 | R2               | RES+, 787K Ω, 1% (0402)                                                        |          1 | VISHAY DALE CRCW0402787KFK  |
|    13 | R3               | RES+, 243kΩ, 1% (0402)                                                         |          1 | PANASONIC ERJ-2RKF2433      |
|    14 | R4               | RES+, 53.6kΩ, 1% (0402)                                                        |          1 | VISHAY DALE CRCW040253K6FK  |
|    16 | R6               | RES+, 10kΩ, 1% (0402)                                                          |          1 | VISHAY DALE CRCW040210K0FK  |
|    15 | R7               | RES+, 0 Ω (0402)                                                               |          1 | PANASONIC ERJ-2GE0R00       |
|    17 | U1               | HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER ;( TQFN16-EP 3mm x 3mm) |          1 | MAXIM MAX17632CATE+         |
|    18 | JU1, JU2         | 3-pin header (36-pin header 0.1' centers)                                      |          2 | SULLINS PEC03SAAN           |
|    19 | -                | Shunts                                                                         |          2 | SULLINS STC02SYAN           |
|    20 | C13, C14         | OPTIONAL: 4.7μF, 10%, 50V, X7R, Ceramic capacitor (1210)                       |          2 | TAIYO YUDEN UMK325B7475KMHP |
|    21 | L2               | OPTIONAL: INDUCTOR, 10µH, 4.9A (4mm x 4mm)                                     |          1 | COILCRAFT XAL4040-153ME     |
|    22 | C7, C8, C12, C16 | OPEN: Capacitor (0402)                                                         |          0 | N/A                         |
|    23 | R5, R8           | OPEN: RESISTOR ( 0402)                                                         |          0 | N/A                         |
|    24 | FB1              | OPEN: Ferrite Bead (0805)                                                      |          0 | N/A                         |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1                    | 1- 2 SHORT             |
| JU2                    | 2- 3 SHORT             |

| JUMPER TABLE   | JUMPER TABLE   |
|----------------|----------------|
| JUMPER         | SHUNT POSITION |
| JU1            | 1, 2 short     |
| JU2            | 2, 3 short     |

Evaluates: MAX17632

5V Output-Voltage Application

## MAX17632C5EVKITE# Kit Schematic

<!-- image -->

## MAX17632C5EVKITE# Kit PCB Layout

MAX17632C 5V EV Kit-Top Silkscreen

<!-- image -->

MAX17632C 5V EV Kit-Layer 2\_GND

<!-- image -->

Evaluates: MAX17632

## 5V Output-Voltage Application

MAX17632C 5V EV Kit-Top Layer

<!-- image -->

MAX17632C 5V EV Kit-Layer 3\_GND

<!-- image -->

## MAX17632C5EVKITE# Kit PCB Layout (continued)

MAX17632C 5V EV Kit-Bottom Layer

<!-- image -->

MAX17632C 5V EV Kit-Bottom Silkscreen

<!-- image -->

Evaluates: MAX17632

5V Output-Voltage Application

## MAX17632C5EVKITE# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17632

5V Output-Voltage Application