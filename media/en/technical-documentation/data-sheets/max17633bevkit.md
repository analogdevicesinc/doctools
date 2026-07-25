<!-- lastmod 2022-08-02 -->
## MAX17633BEVKIT# Evaluation Kit

## General Description

The MAX17633BEVKIT# 5V output evaluation kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX17633B high-voltage,  high-efficiency,  synchronous  step-down DC-DC converter. The EV kit is preset for 5V output at load  currents  of  3.5A  and  features  a  500kHz  switching frequency  for  optimum  efficiency  and  component  size. The EV kit features an adjustable input undervoltage lock -out, adjustable soft-start, open-drain RESET signal, and external frequency synchronization. EV kit specifications, settings,  features  and  benefits  are  highlighted.  For  full MAX17633B IC features, benefits and parameters, refer to MAX17633 datasheet.

## Features

- Wide 6.5V to 36V Input Range
- Programmed 5V Output, 3.5A Load Current
- 500kHz Switching Frequency
- EN/UVLO Input, Resistor-Programmable UVLO Threshold
- Programmed 1ms Soft-Start Time
- Selectable PWM, PFM, and DCM Modes
- Open-Drain RESET Output Pulled Up To 5V of INTVCC
- Provision for External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX17633 5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- One MAX17633BEVKIT# EV kit
- One 0V to 36V DC, 5A power supply
- Load capable of sinking 3.5A current
- Digital voltmeter (DVM)

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  power  supply  until  all connections are complete.

- 1) Set the input power supply at a voltage between 6.5V and 36V. Disable the power supply.
- 2) Connect  the  positive  terminal  of  the  input  power supply to the VIN PCB pad and the negative terminal to  the  nearest  PGND  pad.  Connect  the  positive terminal of the 3.5A load to the VOUT pad and the negative terminal to the nearest PGND pad.
- 3) Connect a DVM across the VOUT pad and the nearest PGND pad.
- 4) Verify  that  shunts  are  not  installed  on  jumper  JU1 (see Table 1 for details).
- 5) Select  the  shunt  position  on  jumper  JU2  according to  the  intended  mode  of  operation  (see  Table  2  for details).
- 6) Turn on the input power supply.
- 7) Enable the load.
- 8) Verify that the DVM displays 5V.

<!-- image -->

## MAX17633BEVKIT# Evaluation Kit

## Detailed Description of Hardware

The MAX17633BEVKIT# is designed to demonstrate the salient features of the MAX17633B. The EV kit includes an EN/UVLO pad and jumper JU1 to enable the output at a desired input voltage. The MODE/SYNC pad allows an external clock interface to synchronize the device. Jumper JU2  allows  selection  of  a  particular  mode  of  operation based on light-load performance requirements. An addi -tional RESET pad is available for monitoring the status of the output voltage.

## Setting the Switching Frequency

Switching  frequency  selection must  consider  inputvoltage  range,  desired  output  voltage,  t ON(MIN) ,  and t OFF(MIN)  of the MAX17633B and ambient temperature. To  optimize  converter  size  and  efficiency  of  the  EV kit,  a  switching  frequency  of  500kHz  is  chosen  for 5V-programmed output. Resistor R5 connected between  RT  and  SGND  pins,  programs  the  desired switching  frequency.  R5  resistor  is  kept  open  for  a default  500kHz  switching  frequency.  To  program  the switching  frequency,  the  R5  resistor  is  calculated  as follows:

<!-- formula-not-decoded -->

where R5 is in kΩ and f SW  is in kHz.

## Soft-Start Programming

The  EV  kit  offers  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time is  adjusted  by  changing  the  value  of  C3,  the  external capacitor from the SS pin to SGND. The selected output capacitance  (C SEL )  and  the  output  voltage  (V OUT ) determine  the  minimum  value  of  C3,  as  shown  by  the following equation:

<!-- formula-not-decoded -->

## Evaluates: MAX17633 5V Output-Voltage Application

The  soft-start  time  (t SS ) is related  to the  soft-start capacitor C3 by the following equation:

<!-- formula-not-decoded -->

For example, in order to program a 1ms soft-start time, C3 should be 5600pF.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The device offers an adjustable input undervoltage-lockout level,  where  output  is  enabled  at  the  minimum  desired input-voltage level. For always-enable operation, a shunt should be installed across pins 1-2 on jumper JU1, which pulls  up  the  EN/UVLO  to  VIN.  In  order  to  disable  the output, install a shunt across pins 2-3 on JU1, which pulls down the EN/UVLO pin to VSGND. See Table 1 for JU1 settings. Set the input voltage level (input undervoltagelockout level)  above which the device turns on with the resistive  voltage-divider  R1  and  R2  connected  between VIN and SGND.

Choose  R1  to  be  3.32MΩ  and  then  calculate  R2  as follows:

<!-- formula-not-decoded -->

where V INU is the input voltage at that the device requires to turn on.

## Table 1. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17633B EV KIT OUTPUT                                 |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| 1-2              | Connected to VIN                                           | Enabled                                                 |
| Not Installed*   | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

*Default position

## MAX17633BEVKIT# Evaluation Kit

## MODE Selection (MODE/SYNC)

The  device's  MODE/SYNC  pin  can  be  used  to  select among forced PWM, DCM, or PFM modes of operation at light loads. The logic state of the MODE/SYNC pin is latched  when  the  VCC  and  EN/UVLO  voltages  exceed the  respective  UVLO  rising  thresholds  and  all  internal voltages are ready to allow LX switching. State changes on  the  MODE/SYNC  pin  are  ignored  during  normal operation.  Refer  to  the  MAX17633  IC  datasheet  for more  information  on  the  PWM,  DCM,  and  PFM  modes of  operation.  Table  2  shows  the  EV  kit  jumper  (JU2) settings that can be used to configure the desired mode of operation.

## External Clock Synchronization (MODE/SYNC)

The  internal oscillator  of  the  MAX17633B  can  be synchronized  to  an  external  clock  signal  through  the MODE/ SYNC pin in DCM and PWM modes of operation. The synchronization to an external clock is not supported in PFM mode of operation. The external synchronization clock  frequency  must  be  between  1.1  x  f SW   and  1.4  x f SW, where f SW  is the frequency of operation as set by R5 resistor. The minimum external clock high pulse width should be greater than 50ns and minimum external low pulse  width  should  be  greater  than  160ns.  The  source impedance of the external SYNC signal source should be below 25kΩ for reliable operation.

## Evaluates: MAX17633 5V Output-Voltage Application

Table 2. MODE/SYNC Description (JU2)

| SHUNT POSITION   | MODE/SYNC PIN       | MAX17633B EV KIT OUTPUT   |
|------------------|---------------------|---------------------------|
| 1-2              | Connected to INTVCC | DCM mode of operation     |
| 2-3*             | Connected to SGND   | PWM mode of operation     |
| Not Installed    | Unconnected         | PFM model of operation    |

*Default position

## Hot Plug-In and Long Input Cables

The MAX17633BEVKIT# PCB layout provides an option -al  electrolytic  capacitor  (C6,  10μF/50V). This  capacitor limits the peak voltage at the input of the MAX17633B when the DC input source is 'Hot-Plugged' to the EV kit input  terminals  with  long  input  cables.  The  equivalent series  resistance  (ESR)  of  the  electrolytic  capacitor dampens  the  oscillations  caused  by  interaction  of  the inductance  of  the  long  input  cables,  and  the  ceramic capacitors at the power module input.

## MAX17633BEVKIT# Evaluation Kit

## MAX17633B EV Kit Performance Report

(V IN = 24V, L = 6.8μH (XAL5050-682ME), f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Evaluates: MAX17633 5V Output-Voltage Application

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAX17633B EV Kit Performance Report (continued)

(V IN = 24V, L = 6.8μH (XAL5050-682ME), f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

CONDITIONS: 35mA LOAD CURRENT, PFM MODE

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17633

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17633BEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX17633

5V Output-Voltage Application

## Component Suppliers

| SUPPLIER        | WEBSITE               |
|-----------------|-----------------------|
| Coilcraft, Inc. | www.coilcraft.com     |
| Murata Americas | www.murata.com        |
| Panasonic Corp. | www.panasonic.com     |
| TDK Corp.       | www.component.tdk.com |
| Venkel Ltd.     | www.venkel.com        |
| SullinsCorp     | www.sullinscorp.com   |
| Taiyo Yuden     | www.t-yuden.com       |
| Vishay Dale     | www.vishay.com        |

Note: Indicate that you are using the MAX17633B IC when contacting these component suppliers.

## MAX17633B EV Kit Bill of Materials

|   S.NO | Ref Designator   | Value          | Description                       | Package                 | Manufacterer Part No.   | Manufacterer     |   Qty |
|--------|------------------|----------------|-----------------------------------|-------------------------|-------------------------|------------------|-------|
|      1 | C1, C10          | 2.2UF          | SMT Capacitor-X7R/50V             | 1206                    | GRM31CR71H225KA88       | Murata           |     2 |
|      2 | C2               | 2.2UF          | SMT Capacitor-X7R/6.3V            | 0603                    | CGA3E1X7R0J225K080      | TDK              |     1 |
|      3 | C3               | 5600PF         | SMT Capacitor-X7R/25V             | 0402                    | GRM155R71E562KA01       | Murata           |     1 |
|      4 | C4, C7           | 22UF           | SMT Capacitor-X7R/10V             | 1210                    | GRM32ER71A226K          | Murata           |     2 |
|      5 | C5               | 0.1UF          | SMT Capacitor-X7R/16V             | 0402                    | GCM155R71C104KA55       | Murata           |     1 |
|      6 | C6               | 10UF           | SMT Aluminum-Electrolytic-X7R/50V | 6.6mm x 6.6mm x 6.1mm   | EEE-FK1H100P            | Panasonic        |     1 |
|      7 | C11              | 0.1UF          | SMT Capacitor-X7R/100V            | 0603                    | CC0603KRX7R0BB104       | Yageo            |     1 |
|      8 | C17              | 0.1UF          | SMT Capacitor-X7R/25V             | 0402                    | GRM155R71E104KE14       | Murata           |     1 |
|      9 | JU1,JU2          | -              | 3-pin header                      | -                       | GRPB031VWVN-RC          | SULLINS          |     2 |
|     10 | L1               | 6.8UH          | SMT Inductor                      | 5.48mm x 5.28mm x 5.1mm | XAL5050-682ME           | Coilcraft        |     1 |
|     11 | R1               | 3.32M          | SMT Resistor                      | 0402                    | Generic                 | Generic          |     1 |
|     12 | R2               | 787K           | SMT Resistor                      | 0402                    | Generic                 | Generic          |     1 |
|     13 | R7,R3            | 0R             | SMT Resistor                      | 0402                    | Generic                 | Generic          |     1 |
|     14 | R6               | 10K            | SMT Resistor                      | 0402                    | Generic                 | Generic          |     1 |
|     15 | U1               | 4.5V-36V, 3.5A | Buck Converter                    | 20-Pin TQFN 4mmx4mm     | MAX17633BATP+           | MAXIM INTEGRATED |     1 |

Evaluates: MAX17633

5V Output-Voltage Application

## MAX17633B EV Kit Schematic

<!-- image -->

## MAX17633BEVKIT# Evaluation Kit

## MAX17633B EV Kit PCB Layout

MAX17633B EV Kit - Top Silkscreen

<!-- image -->

Evaluates: MAX17633

## MAX17633B EV Kit PCB Layout (continued)

MAX17633B EV Kit - Top

<!-- image -->

## MAX17633B EV Kit PCB Layout (continued)

MAX17633B EV Kit - Layer2 GND

<!-- image -->

## MAX17633B EV Kit PCB Layout (continued)

<!-- image -->

MAX17633B EV Kit - Layer3 GND

## MAX17633B EV Kit PCB Layout (continued)

<!-- image -->

MAX17633B EV Kit - Bottom

Evaluates: MAX17633

## MAX17633B EV Kit PCB Layout (continued)

MAX17633B EV Kit - Bottom Silkcreen

<!-- image -->

## MAX17633BEVKIT# Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------|-----------------|
|                 0 | 5/18            | Initial release                                              | -               |
|                 1 | 8/18            | Updated part number to MAX17633BEVKIT# and Bill of Materials | 1-14            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17633

5V Output-Voltage Application