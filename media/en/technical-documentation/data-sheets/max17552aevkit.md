<!-- lastmod 2022-08-02 -->
## MAX17552AEVKIT# Evaluation Kit

## General Description

The MAX17552AEVKIT# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX17552A 60V, 100mA ultra-small, high-efficiency, Himalaya synchronous step-down DC-DC converter in a 10-pin TDFN package. The EV kit operates over a wide input-voltage range of 6V to 60V and provides up to 100mA load current at 5V output. It draws only 26µA supply current under no-load conditions (EN/UVLO connected to V IN ). The EV kit is programmed to switch at a frequency  of  220kHz  and  delivers  a  peak  efficiency  of 93% with the supplied components. The device is simple to  use  and  easily  configurable  with  minimal  external components. It features cycle-by-cycle peak current limit protection, undervoltage lockout, and thermal shutdown.

The  EV  kit  comes  installed  with  the  MAX17552AATB+ in a 10-pin (3mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Features

- Wide 6V to 60V Input Voltage Range
- 5V Output, 100mA Continuous Current
- 93% Peak Efficiency
- 26µA No Load Supply Current
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Internal or Programmable Soft-Start
- Selectable PWM and PFM Modes of Operation
- Open-Drain RESET Output
- Overcurrent Protection
- Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

TDFN is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX17552A (TDFN) in 5V Output Voltage Applications

## Quick Start

## Recommended Equipment

- MAX17552AEVKIT#
- 60V adjustable, 0.5A DC power supply
- Load capable of sinking 100mA at 5V
- Two digital multimeters (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Set the input voltage to 24V and disable the power supply.
- 2) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest GND PCB pad.
- 3) Connect  the  positive  terminal  of  the  load  to  the VOUT  PCB  pad  and  the  negative  terminal  to  the nearest GND PCB pad.
- 4) Connect one DMM across the VOUT PCB pad and the nearest GND PCB pad, and another DMM across the RESET PCB pad and the GND PCB pad.
- 5) Verify that shunts are installed on jumpers JU1 and JU2. See Table 1 for details.
- 6) Select  the  shunt  position  on  JU3  according  to  the intended mode of operation. See Table 2 for details.
- 7) Turn on the input power supply and enable the load.
- 8) Verify  that  the  DMM  across  the  output  terminals displays 5V.
- 9) Verify that the DMM across the RESET PCB pad and GND PCB displays 5V.
- 10)  Vary the input voltage between 6V and 60V and vary the load current from 1mA to 100mA. Verify that output voltage is 5V with respect to GND.
- 11) Reduce the input voltage to 5.3V.
- 12)  Verify that both the DMMs display 0V.
- 13)  Disable the input power supply.

Note: While  performing  an  output  short-circuit  test,  it is  possible  for  the  ceramic  output  capacitor  to  oscillate with  the  wiring  inductance  between  the  capacitor  and

<!-- image -->

## MAX17552AEVKIT# Evaluation Kit

short-circuited load, and thereby cause the absolute maximum rating of the V OUT  pin (-0.3V) to be exceeded. The resistor (R7) and the capacitor (C5) are included on this evaluation kit to protect against unintentional violation of the above mentioned rating. In the actual system design, parasitic board or wiring inductance should be minimized and  the  output-voltage  waveform  under  short-circuit operation should be verified to ensure that the absolute maximum rating of the V OUT  pin is not exceeded.

## Detailed Description

The MAX17552AEVKIT# EV kit is a fully assembled and tested circuit board that demonstrates the performance of the  MAX17552A 60V, 100mA ultra-small, high-efficiency, synchronous  step-down  DC-DC  converter  in  a  10-pin TDFN  package.  The  EV  kit  operates  over  a  wide  input voltage  range  of  6V  to  60V  and  provides  up  to  100mA load current at 5V output. It draws only 26µA supply current  under  no-load  conditions  (EN/UVLO  connected  to VIN). The EV kit is programmed to switch at a frequency of 220kHz and delivers a peak efficiency of 93% with the supplied  components.  The  device  is  simple  to  use  and easily  configurable  with  minimal  external  components. It  features  cycle-by-cycle  peak  current  limit  protection, undervoltage lockout, and thermal shutdown.

## Evaluates: MAX17552A (TDFN) in 5V Output Voltage Applications

RESET PCB  pad  is  available  for  monitoring  the  status of the converter. The RT/SYNC PCB pad can be used to synchronize the EV kit to an external clock.

## Enable/Undervoltage Lockout Programming (EN/UVLO)

The EN/UVLO PCB pad on the EV kit serves as an on/off control while also allowing the user to program the input undervoltage lockout (UVLO) threshold. Jumpers JU1 and JU2 configure the EV kit's output for turn-on/turn-off control. See Table 1 for proper JU1, JU2 jumper configurations.

Additionally, resistors R1 and R2 are included to set the UVLO to a desired turn-on voltage. Refer to the Setting the  Input  Undervoltage-Lockout  Level section  in the MAX17552A IC data sheet for additional information on setting the UVLO threshold voltage.

## Open-Drain RESET Output

The EV kit provides a PCB pad to monitor the status of the converter. RESET goes high when the output voltage rises above 95% (typ) of its nominal regulated output voltage. RESET goes low when the output voltage falls below 92% (typ) of its nominal regulated voltage.

## Mode Selection (MODE)

The EV kit includes an EN/UVLO PCB pad and jumpers JU1 and JU2 to enable control of the converter output. The  MODE  PCB  pad  and  jumper  JU3  are  provided for  selecting  the  mode  of  operation  of  the  converter.  A

The EV kit includes a jumper (JU3) to select the mode of operation of the converter. Install a shunt across JU3 before powering up the EV kit to enable the forced-PWM operation. Keep JU3 open to enable the light-load PFM operation. See Table 2 for proper JU3 settings.

## Table 1. Converter EN/UVLO Jumpers (JU1, JU2) Settings

| SHUNT POSITION   | SHUNT POSITION   |                                                  |                     |
|------------------|------------------|--------------------------------------------------|---------------------|
| JU1              | JU2              | EN/UVLO PIN                                      | OUTPUT              |
| 1-2              | Open             | Connected to VIN                                 | Enabled             |
| Open             | 1-2              | Connected to GND                                 | Disabled            |
| 1-2*             | 1-2*             | Connected to midpoint of R1, R2 resistor-divider | Enabled at VIN ≥ 6V |

* Default position.

## Table 2. Mode Selection Jumper (JU3) Settings

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

* Default position.

## MAX17552AEVKIT# Evaluation Kit

## Soft-Start Input (SS)

The EV kit offers a fixed 5ms soft-start time. Connect the capacitor  C4  to  adjust  the  soft-start  time  (t SS ).  Use  the following equation to determine the soft-start capacitance value (CSS).

<!-- formula-not-decoded -->

where t SS  is in milliseconds and C SS  is in nanofarads.

## External Clock Synchronization (RT/SYNC)

The  EV  kit  provides  a  PCB  pad  to  synchronize  the MAX17552A to an optional external clock. Apply the external clock to  the  RT/SYNC PCB pad through an  AC-coupling capacitor. Refer to the External Synchronization section

## EV Kit Performance Report

(V IN  = 24V, f SW  = 220kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

## Evaluates: MAX17552A (TDFN) in 5V Output Voltage Applications

in the MAX17552A IC data sheet for additional information  on  configuring  the  external  clock  and  selecting  the AC-coupling capacitor.

## Hot Plug-in and Long Input Cables

The MAX17552AEVKIT# EV kit PCB layout provides an optional  electrolytic  capacitor  (C1  =  22µF/100V).  This capacitor limits the peak voltage at the input of the converter when the DC input source is Hot Plugged into the EV kit input terminals with long input cables. The equivalent series resistance (ESR) of the electrolytic capacitor dampens  the  oscillations  caused  by  the  interaction  of the inductance of the long input cables and the ceramic capacitors at the converter's input.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## EV Kit Performance Report (continued)

(V IN  = 24V, f SW  = 220kHz, T A  = +25°C, unless otherwise noted)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX17552AEVKIT# Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| Coilcraft       | www.coilcraft.com |
| Murata Americas | www.murata.com    |
| Panasonic       | www.panasonic.com |
| TDK corp.       | www.tdk.com       |

Evaluates: MAX17552A (TDFN) in

5V Output Voltage Applications

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17552AEVKIT# | EV Kit |

# Denotes RoHS compliance

Note: Indicate that you are using the MAX17552AATB when contacting these component suppliers.

## MAX17552A 5V EV Kit (TDFN) Bill of Materials

|   S.No | DESIGNATOR   | DESCRIPTION                                                                                                                  |   QTY | MANUFACTURER PART NUMBER       |
|--------|--------------|------------------------------------------------------------------------------------------------------------------------------|-------|--------------------------------|
|      1 | C1           | 22μF, 100V Electrolytic Capacitor (8.3mm x 8.3mm)                                                                            |     1 | PANASONIC EEVFK2A220P          |
|      2 | C2           | 1µF±10%; 100V; X7R; Ceramic Capacitor (1206)                                                                                 |     1 | TDK C3216X7R2A105K160AA        |
|      3 | C3           | 10µF±10%; 25V; X7R; Ceramic Capacitor (1206)                                                                                 |     1 | TDK C3216X7R1E106K160AB        |
|      4 | C5           | 0.22µF±10%; 16V; X7R; Ceramic Capacitor (0402)                                                                               |     1 | MURATA GRM155R71C224KA12       |
|      5 | JU1-JU3      | 2-Pin Headers                                                                                                                |     3 | SAMTEC TSW-102-07-T-S          |
|      6 | L1           | 220µH±20%; IRMS = 0.235A; Inductor (4.8mmx4.8mm)                                                                             |     1 | COILCRAFT LPS5030-224MR        |
|      7 | R1           | 3.01MΩ ±1%; 0.063W, Resistor (0402)                                                                                          |     1 |                                |
|      8 | R2           | 787kΩ ±1%; 0.063W, Resistor (0402)                                                                                           |     1 |                                |
|      9 | R3           | 191kΩ ±1%; 0.063W, Resistor (0402)                                                                                           |     1 |                                |
|     10 | R4           | 261kΩ ±1%; 0.063W, Resistor (0402)                                                                                           |     1 |                                |
|     11 | R5           | 49.9kΩ ±1%; 0.063W, Resistor (0402)                                                                                          |     1 |                                |
|     12 | R6           | 100kΩ ±1%; 0.063W, Resistor (0402)                                                                                           |     1 |                                |
|     13 | R7           | 22.1Ω ±1%; 0.063W, Resistor (0402)                                                                                           |     1 |                                |
|     14 | SU1-SU3      | Jumper Socket (2.54mm)                                                                                                       |     3 | SULLINS STC02SYAN              |
|     15 | U1           | 60V, 100mA, ultra-small, highefficiency, synchronous step-down DC-DC converter with 22μA noload supply current (10 TDFN-EP*) |     1 | MAXIM INTEGRATED MAX17552AATB+ |
|     16 | C4           | Open: Capacitor (0402)                                                                                                       |     0 |                                |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1, JU2               | 1-2                    |
| JU3                    | Open                   |

│

## MAX17552A 5V EV Kit (TDFN) Schematic Diagram

<!-- image -->

## MAX17552A 5V EV Kit (TDFN) PCB Layout Diagrams

<!-- image -->

MAX17552A 5V EV Kit (TDFN)-Top Silkscreen

MAX17552A 5V EV Kit (TDFN)-Top Layer

<!-- image -->

MAX17552A 5V EV Kit (TDFN)-Bottom Layer

<!-- image -->

│

## MAX17552AEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/21            | Release for Market Intro                                                                                           | -               |
|                 1 | 9/21            | Updated General Description , EV Kit Performance Report , Bill of Materials Title, and PCB Layout Diagram Captions | 1, 3-5, 7       |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe LPSlLed  0a[LP InteJUated UeVeUYeV tKe ULJKt tR FKanJe tKe FLUFXLtU\ and VSeFL¿FatLRnV ZLtKRXt nRtLFe at an\ tL

│

Evaluates: MAX17552A (TDFN) in

5V Output Voltage Applications