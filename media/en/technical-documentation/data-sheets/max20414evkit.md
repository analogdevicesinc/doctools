<!-- lastmod 2022-11-23 -->
<!-- image -->

Evaluates: MAX20414

## General Description

The MAX20414 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX20414 powermanagement IC (PMIC). The  EV  kits  include  two  highefficiency,  low-voltage  DC-DC  converters.  OUT1  boosts a 3.3V input to 5V at up to 500mA, while the OUT2 stepdown converter provides adjustable output voltages down to  0.8V  at  up  to  3A.  The  2.2MHz  switching-frequency operation allows for the use of all-ceramic capacitors and minimizes external components.

The EV kit features  two  on/off  jumper  controls  and  two reset  outputs  ( RESET1 , RESET2 )  to  indicate  output status for each converter. It also provides a SYNC input to select the operating mode (forced-PWM, skip, or external frequency synchronization).

## Features

- 3V to 5.5V Operating Supply Voltage
- 5V at 500mA Synchronous Boost Converter (OUT1)
- 1.25V at 3A Synchronous Buck Converter (OUT2)
- SYNC Mode Select Input for Forced-PWM (FPWM), Skip Mode Selection, or External Frequency Synchronization
- Individual RESET\_ Outputs
- Minimized External Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20414 EV kit
- Variable 6V power supply capable of supplying 5A
- Two voltmeters
- Electronic load

Ordering Information appears at end of data sheet.

©

## MAX20414 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply to 3.3V. Turn off the power supply.
- 2) Preset  the  electronic  load  to  500mA.  Turn  off  the electronic load.
- 3) Connect the positive lead of the power supply to the VSUP PCB pad.  Connect  the  negative  lead  of  the power supply to the PGND PCB pad.
- 4) Connect the positive terminal of the electronic load to the VOUT1 PCB pad. Connect the negative terminal of the electronic load to the PGND1 PCB pad.
- 5) Enable  outputs  VOUT1  and  VOUT2  by  installing shunts on jumpers EN1 and EN2.
- 6) Install a shunt on SYNC1 to enable  FPWM operation.
- 7) Turn on the power supply.
- 8) Verify that the voltage across the VOUT1 and PGND1 PCB pads is 5V ±1%.
- 9) Verify that the voltage across the RESET1 and PGND PCB pads is 3.3V.
- 10)  Turn on the electronic load.
- 11) Verify that the voltage across the VOUT1 and PGND1 PCB pads is 5V ±2%.
- 12) Turn off the electronic load.
- 13) Remove  the  electronic  load  from  the  VOUT1  and PGND1 PCB pads.
- 14)  Connect the positive terminal of the electronic load to the VOUT2 PCB pad. Connect the negative terminal of the electronic load to the PGND2 PCB pad. Preset the electronic load to 3A.
- 15) Verify that the voltage across the VOUT2 and PGND2 PCB pads is 1.25V ±2%.
- 16)  Verify that the voltage across the RESET2 and PGND PCB pads is 3.3V.
- 17)  Turn on the electronic load.
- 18) Verify that the voltage across the VOUT2 and PGND2 PCB pads is 1.25V ±3%.
- 19) Turn off the electronic load.
- 20) Turn off the power supply.

319-100023; Rev 0.1; 5/18

owners.

## Detailed Description

The MAX20414 EV kit integrates two high-efficiency, lowvoltage DC-DC converters. OUT1 is a synchronous boost converter that boosts a 3.3V input to 5V at up to 500mA, while  the  OUT2  synchronous  step-down  converter  pro -vides adjustable output voltages down to 0.8V at up to 3A.

V OUT1 and V OUT2 can be enabled/disabled by the EN1 and EN2 jumpers, respectively. The status of input volt -age  and  output  voltages  can  be  indicated  by RESET1 and RESET2 .

## Adjustable Buck Output Voltage (VOUT2)

The buck output voltage (V OUT2 ) can be adjusted using the following procedure:

- 1) Choose R BOTTOM to be 100kΩ or less.
- 2) Solve for R TOP using: R TOP = R BOTTOM x [(V OUT\_ /0.8V) - 1]
- 3) Install resistors R TOP and R BOTTOM . R TOP refers to R2, while R BOTTOM refers to R3 in the EV kit schematic.

## Operation Mode

The  EV  kit  features  a  jumper  (SYNC1)  to  configure the  IC's  operation  mode.  Install  a  shunt  on  SYNC1  to enter  FPWM  mode.  Remove  the  shunt  on  SYNC1  to enable skip mode under light-load conditions. Connect an external  clock  with  a  1.8MHz  to  2.6MHz  frequency  to synchronize  the  internal  oscillator  to  an  external  clock. Table 1 summarizes the functions of SYNC1.

## Enable Control

The EN1, and EN2 jumpers are used to enable or disable V OUT1, and V OUT2 , respectively. Install shunts on EN1, or  EN2  to  enable  V OUT1 or  V OUT2 normal  operation. Remove the shunts  on  EN1  or  EN2  to  enter  shutdown mode. See Table 2 for enable control

## Reset Outputs ( RESET1 and RESET2 )

The EV kit also includes two RESET\_ outputs to monitor V OUT1 and  V OUT2 output  status.  The RESET\_ output becomes  high  impedance  and  is  pulled  to  the  VSUP voltage when the corresponding output voltage is within the specified UV/OV range. RESET\_ goes low when the corresponding  output  voltage  is  not  within  the  specified UV/OV range.

## Table 1. Operation Mode (SYNC1)

| SHUNT POSITION                                        | MODE                          |
|-------------------------------------------------------|-------------------------------|
| On                                                    | Forced PWM                    |
| Off                                                   | Skip                          |
| Off (an external clock connected to the SYNC PCB pad) | Synchronize to external clock |

## Table 2. Enable Control (EN1, and EN2)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| On               | Normal Operation |
| Off              | Shutdown         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20414EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20414 Evaluation Kit

## MAX20414 EV Kit Bill of Materials

| DESIGNATION          |   QTY | DESCRIPTION                                         |
|----------------------|-------|-----------------------------------------------------|
| C1                   |     1 | 10µF 16V X6S Ceramic Capacitor (0805)               |
| C1                   |     1 | Murata GRT21BC81C106KE01L                           |
| C2                   |     1 | 47µF 4V X6S Ceramic Capacitor (0805)                |
| C2                   |     1 | Murata GRT21BC80G476ME13L                           |
| C4                   |     1 | 47µF 16V Aluminum Capacitor                         |
| C4                   |     1 | Panasonic EEEFC1C470P                               |
| C5                   |     1 | 4.7µF 16V X7R Ceramic Capacitor (1206)              |
| C5                   |     1 | TDK CGA5L3X7R1C475K160AB                            |
| C7                   |     1 | 1µF 16V X7R Ceramic Capacitor (0603)                |
| C7                   |     1 | TDK C1608X7R1C105K080AC                             |
| C8                   |     1 | 0.33µF 16V X7R Ceramic Capacitor (0603)             |
| C8                   |     1 | TDK C1608X7R1C334K080AC                             |
| C11                  |     1 | 4.7µF 16V X6S Ceramic Capacitor (0603)              |
| C11                  |     1 | Murata GRT188C81C475ME13D                           |
| C12                  |     1 | 0Ω 1% Resistor (0603)                               |
| C13                  |     1 | 18pF 50V COG Ceramic Capacitor (0603)               |
| C13                  |     1 | TDK CGA3E2C0G1H180J080AA                            |
| C14                  |     0 | Not Installed (0805)                                |
| EN1, EN2, SYNC1, WDS |     4 | 2-Pin Header 0.1'                                   |
| EN1, EN2, SYNC1, WDS |     4 | Sullins: PEC36SAAN or Equivalent                    |
| L1                   |     1 | 2.2µH Inductor                                      |
| L1                   |     1 | TDK TFM252012ALMB2R2MTAA                            |
| L2                   |     1 |                                                     |
| L2                   |     1 | 0.47µH Inductor                                     |
| R1                   |     1 | 10Ω 1% Resistor (0603)                              |
| R2                   |     1 | 11.3kΩ 1% Resistor (0603)                           |
| R3, R10, R11         |     3 | 20kΩ 1% Resistor (0603)                             |
| R4, R12              |     2 | 0Ω 1% Resistor (0603)                               |
| R8                   |     0 | Not Installed (0603)                                |
| U1                   |     1 | 2.2MHz Sync Boost and Dual Step-Down Converter PMIC |
| U1                   |     1 | Maxim MAX20414ATGA/V+ (24 TQFN 4mm×4mm×0.75mm)      |
| ---                  |     4 | Shunt, 2 POSITION                                   |
| ---                  |     4 | Sullins: STC02SYAN or Equivalent                    |
| ---                  |     1 | PCB: MAX20414 EVKIT                                 |

Evaluates: MAX20414

## MAX20414 Evaluation Kit

## MAX20414 EV Kit Schematic

<!-- image -->

Evaluates: MAX20414

## MAX20414 EV Kit Layout Diagrams

MAX20414 EV Kit Schematic Component Placement Guide -Top Silkscreen

<!-- image -->

## MAX20414 EV Kit Layout Diagrams (continued)

MAX20414 EV Kit Schematic PCB Layout -Top Layer

<!-- image -->

## MAX20414 EV Kit Layout Diagrams (continued)

MAX20414 EV Kit Schematic PCB Layout -Internal Layer 2

<!-- image -->

## MAX20414 EV Kit Layout Diagrams (continued)

MAX20414 EV Kit Schematic PCB Layout -Internal Layer 3

<!-- image -->

## MAX20414 EV Kit Layout Diagrams (continued)

MAX20414 EV Kit Schematic PCB Layout -Bottom Layer

<!-- image -->

## MAX20414 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/17            | Initial release                                                                                   | -               |
|               0.1 | 5/18            | Corrected typo with root part number in Ordering Information (changed from MAX200414 to MAX20414) | 2               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX20414