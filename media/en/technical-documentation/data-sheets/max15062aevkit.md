<!-- lastmod 2022-08-02 -->
## MAX15062AEVKIT# Evaluation Kit

## General Description

The MAX15062AEVKIT# evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the performance of the MAX15062A 60V, 300mA ultra-small, high-efficiency,  synchronous  step-down  converter.  The EV kit  operates  over  a  wide  4.5V  to  60V  input  voltage range, and provides up to 300mA at the preset 3.3V output.  The  device  features  undervoltage  lockout,  overcurrent protection, and thermal shutdown. The EV kit switches at a fixed frequency of 500kHz, and delivers a peak efficiency of 90% with the supplied components.

The  EV  kit  comes  installed  with  the  MAX15062AATA+ in an 8-pin (2mm x 2mm) lead(Pb)-free/RoHS-compliant TDFN package.

## Features

- 4.5V to 60V Input Voltage Range (Note 1)
- 3.3V Output, 300mA Continuous Current
- Internal Compensation
- EN/UVLO for On/Off Control and Programmable Input Undervoltage Lockout
- 90% Peak Efficiency
- 500kHz Fixed-Frequency PWM Operation
- PFM or Forced-PWM Mode of Operation
- Hiccup Mode Overcurrent Protection
- Open-Drain RESET Output
- Thermal Shutdown
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Note 1: In PWM mode, operation at input voltages greater than 51V can cause the converter to reach its minimum controllable ON time (t on-min ), resulting in the increased inductor current ripple and output voltage ripple, especially at light load conditions. However, the average output voltage is regulated.

Evaluates: MAX15062A

## Quick Start

## Recommended Equipment

- MAX15062AEVKIT# EV kit
- 60V adjustable, 0.5A DC power supply
- Load capable of sinking 300mA
- Voltmeter

## Equipment Setup and Test Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Set the power supply at a voltage between 4.5V and 60V. Then, disable the power supply.
- 2)  Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the nearest GND PCB pad. Connect the positive terminal of the 300mA load to the VOUT PCB pad and the negative terminal to the nearest GND PCB pad.
- 3)  Connect  the  Multimeter  across  the  VOUT  PCB  pad and the nearest GND PCB pad.
- 4)  Verify  that  shunts  are  installed  on  jumpers  JU1  and JU2 (EN/UVLO).
- 5)  Verify  that  shunt  is  open  on  jumpers  JU3  for  PFM mode of operation.
- 6)  Turn on the DC power supply.
- 7)  Enable the load.
- 8)  Verify that the multimeter displays 3.3V.

<!-- image -->

## Detailed Description

The MAX15062AEVKIT# is a fully assembled and tested circuit  board  that  demonstrates  the  performance  of  the MAX15062A  60V,  300mA  ultra-small,  high-efficiency, synchronous  step-down  converter.  The  EV  kit  operates  over  a  wide  4.5V  to  60V  input  voltage  range,  and provides  up  to  300mA  at  the  preset  3.3V  output.  The device  features  undervoltage  lockout,  overcurrent  protection,  and  thermal  shutdown.  The  EV  kit  switches at  a  fixed  frequency  of  500kHz,  and  delivers  a  peak efficiency of 90% with the supplied components.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  and  jumpers  JU1  and  JU2  to  enable  control  of  the  converter output. Jumper JU3 allows the selection of the mode of operation based on light load-performance requirements. An additional RESET PCB pad is available for monitoring whether the converter output is in regulation or not.

## Enable/Undervoltage-Lockout (EN/UVLO) Programming

The  MAX15062  offers  an  Enable  and  adjustable  input undervoltage-lockout  feature.  In  this  EV  kit,  for  normal operation,  leave  EN/UVLO  jumpers  (JU1  and  JU2)  with shunts installed. When JU1 and JU2 have shunts installed, the  MAX15062  is  enabled  when  the  input  voltage  rises above 4.5V. To disable MAX15062, install a jumper on JU2 and keep JU1 in an open position. See Table 1 for JU1 settings. The EN/UVLO PCB pad on the EV kit supports external Enable/Disable control of the device. Leave JU1 and  JU2  open  when  external  Enable/Disable  control  is desired. A potential divider formed by R1 and R2 sets the input voltage (V INU ) above which the converter is enabled when JU1 and JU2 are closed.

Choose R1 to be 2.2MΩ (max) and then calculate R2 as follows:

<!-- formula-not-decoded -->

where, V INU  = Voltage at which the device is required to turn on, and R1 and R2 are in kΩ.

Refer to the Enable Input (EN/UVLO) Soft-Start section in the MAX15062 data sheet for additional information on setting the UVLO threshold voltage.

## Active-Low Open-Drain Reset Output ( RESET )

The EV kit provides a RESET PCB pad to monitor the status of the RESET output. RESET goes high when VOUT rises  above  95%  (typ)  of  its  nominal  regulated  output voltage. When VOUT falls below 92% (typ) of its nominal regulated voltage, RESET is pulled low.

## Mode of Operation

The  EV  kit  features  fixed  frequency  PWM  mode  and PFM mode of operation for higher efficiency at light-load conditions. The  mode  can  be  selected  by  programming the jumper JU3 on the EV kit. Install a shunt on JU3 to operate  in  PWM  mode,  leave  JU3  in  open  position  for PFM mode of operation. The EV kit is set to PFM mode of operation by default. Refer to the MAX15062 data sheet for more details on the modes of operation.

## Hot Plug-In and Long Input Cables

The MAX15062AEVKIT# PCB layout provides an optional electrolytic  capacitor  (C1  =  22μF/100V).  This  capacitor limits the peak voltage at the input of the MAX15062 when the DC input source is 'Hot-Plugged' to the EV kit input terminals  with  long  input  cables.  The  equivalent  series resistance  (ESR)  of  the  electrolytic  capacitor  dampens the oscillations caused by interaction of the inductance of the long input cables, and the ceramic capacitors at the buck converter input.

## Table 1. Converter EN/UVLO Jumper (JU1 &amp; JU2) Settings

| SHUNT POSITION   | SHUNT POSITION   | EN/UVLO PIN                                          | VOUT OUTPUT           |
|------------------|------------------|------------------------------------------------------|-----------------------|
| JU1              | JU2              | EN/UVLO PIN                                          | VOUT OUTPUT           |
| 1-2              | Open             | Connected to VIN                                     | Enabled               |
| Open             | 1-2              | Connected to GND                                     | Disabled              |
| 1-2*             | 1-2              | Connected to midpoint of the R1, R2 resistor-divider | Enabled at VIN ≥ 4.5V |

*Default position.

## Table 2. Mode Selection Jumper (JU3) Settings

| SHUNT POSITION   | MODE PIN         | MODE OF OPERATION   |
|------------------|------------------|---------------------|
| 1-2              | Connected to GND | Forced PWM          |
| Open*            | Unconnected      | PFM                 |

*Default position.

## MAX15062AEVKIT# Evaluation Kit

## EV Kit Performance Report

(V IN  = 24V, V OUT  = 3.3V, f SW  = 500kHz, unless otherwise noted.)

<!-- image -->

<!-- image -->

Evaluates: MAX15062A

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX15062AEVKIT# Evaluation Kit

## EV Kit Performance Report (continued)

(V IN  = 24V, V OUT  = 3.3V, f SW  = 500kHz, unless otherwise noted.)

LOAD TRANSIENT RESPONSEPFM OR PWM MODE (LOAD CURRENT STEPPED FROM 150mA TO 300mA)

MAX15062A EV toc06

VOUT (AC)

100mV/div

IOUT

100mA/div

20µs/div

<!-- image -->

## Component Suppliers

| SUPPLIER        | WEBSITE             |
|-----------------|---------------------|
| Coilcraft, Inc. | www.coilcraft.com   |
| Murata Americas | www.murata.com      |
| Panasonic Corp. | www.panasonic.com   |
| SullinsCorp     | www.sullinscorp.com |

Note: Indicate that you are using the MAX15062 when contacting these component suppliers.

Evaluates: MAX15062A

<!-- image -->

<!-- image -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15062AEVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

│

## MAX15062AEVKIT# EV Kit Bill of Materials

|   S.No | DESIGNATOR    | DESCRIPTION                                     |   QUANTITY | MANUFACTURER PART NUMBER   |
|--------|---------------|-------------------------------------------------|------------|----------------------------|
|      1 | C1            | 22 μ F, 20%, 100V, Electrolytic capacitor       |          1 | PANASONIC EEEHA2A220UP     |
|      2 | C2            | 1 μ F, 10%, 100V, X7R,Ceramic capacitor (1206)  |          1 | MURATA GRM31CR72A105KA     |
|      3 | C3            | 1 μ F, 10%, 6.3V, X7R,Ceramic capacitor (0603)  |          1 | MURATA GRM188R70J105K      |
|      4 | C4            | 10 μ F, 10%, 6.3V, X7R,Ceramic capacitor (1206) |          1 | MURATA GRM31CR70J106K      |
|      5 | JU1, JU2, JU3 | 2-pin header (36-pin header 0.1' centers)       |          3 | SULLINS PEC02SAAN          |
|      6 | L1            | INDUCTOR, 33 μ H, 0.68A                         |          1 | COILCRAFT LPS4018-333ML    |
|      7 | R1            | 2.2M Ω , ±1%, 1/10W, resistor (0402)            |          1 |                            |
|      8 | R2            | 806k Ω , ±1%, 1/10W, resistor (0402)            |          1 |                            |
|      9 | R3            | 100k Ω , ±1%, 1/10W, resistor (0402)            |          1 |                            |
|     10 | U1            | Integrated Step-down Converter, MAX15062A       |          1 | MAXIM MAX15062AATA+        |

| DEFAULT JUMPER TABLE   | DEFAULT JUMPER TABLE   |
|------------------------|------------------------|
| JUMPER                 | SHUNT POSITION         |
| JU1, JU2               | Close                  |
| JU3                    | Open                   |

│

Evaluates: MAX15062A

## MAX15062AEVKIT# Evaluation Kit

## MAX15062AEVKIT# EV Kit Schematic

<!-- image -->

│

Evaluates: MAX15062A

## MAX15062AEVKIT# EV Kit PCB Layout

MAX15062AEVKIT# EV Kit-Top Silkscreen

<!-- image -->

MAX15062AEVKIT# EV Kit-Top Layer

<!-- image -->

MAX15062AEVKIT# EV Kit-Bottom Layer

<!-- image -->

│

## MAX15062AEVKIT#

## Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/13            | Initial release                                                                                                                                                                                                                                                                                                                                                                   | -               |
|                 1 | 5/19            | Update the title and Features, Quick Start, Equipment Setup and Test Procedures, Detailed Description, Active-Low Open-Drain Reset Output ( RESET ) and EV Kit Performance Report sections, and TOC09; replaced the Enable/Undervoltage- Lockout (EN/UVLO) Programming, Mode of Operation, Hot Plug-In and Long Input Cables, Component Suppliers, and Bill of Materials sections | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserYes the riJht to chanJe the circuitry and speci¿cations Zithout notice at any time.

│

Evaluates: MAX15062A