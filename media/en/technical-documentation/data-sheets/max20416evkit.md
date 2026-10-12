<!-- lastmod 2022-08-02 -->
## MAX20416 Evaluation Kit

## General Description

## Procedure

The MAX20416  EV  kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

to

- 1) Preset the power supply to 3.3V. Turn �� the power supply.
- 2) Preset the electronic load to 3A. Turn �� the electronic load.

The MAX20416 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX20416 power-management  IC  (PMIC).  The    EV  kit  includes  two high-efficiency, low-voltage DC-DC synchronous buck converters (OUT1, OUT2) that operate from a 3.0V 5.5V input voltage range and provide a 0.8V to 3.8V output voltage range at up to 3A. The 2.2MHz switching-frequency operation  allows  for  the  use  of  all-ceramic  capacitors  and minimizes external components.

The  EV  kit  features  two  on/off  jumper  controls  and  two reset outputs to indicate output status for each converter. The EV  kit also provides a SYNC  input to select operating mode (PWM, skip, or external synchronization).

## Benefits and Features

- 3.0V to 5.5V Operating Supply Voltage
- 1.25V at 3A Synchronous Buck Converter (OUT1)
- 1.8V at 3A Synchronous Buck Converter (OUT2)
- Sync-Mode Select, Input for Forced-PWM (FPWM), Skip-Mode Selection, or External Frequency Synchronization
- Individual EN Inputs and RESET\_ Outputs
- Minimized External Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- Variable 6V power supply capable of supplying 5A
- Two voltmeters
- Electronic load
- 3) Connect the positive lead of the power supply to the VSUP  PCB  pad.  Connect  the  negative  lead  of  the power supply to the PGND PCB pad.
- the 4) Connect the positive terminal of the electronic load to the VOUT1 PCB pad. Connect the negative terminal of the electronic load to the PGND1 PCB pad.
- 5) Enable outputs OUT1 and OUT2 by installing shunts across jumpers EN1 and EN2.
- 6) Install a shunt on SYNC1 to enable FPWM operation.
- 7) Turn on the power supply.
- 8) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 1.25V ±2%.
- 9) Verify  that  voltage  across  the RESET1 and  PGND PCB pads is 3.3V.
- 10) Turn on the electronic load.
- 11) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 1.25V ±2%.

Ordering Information appears at end of data sheet.

12) T��������������

- 13) Remove the electronic load from the  VOUT1  and PGND1 PCB pads.
- 14) Connect the positive terminal of the electronic load to the VOUT2 PCB pad. Connect the negative terminal of the electronic load to the PGND2 PCB pad. Preset the electronic load to 3A.
- 15) Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 1.8V ±2%.
- 16) Verify  that  voltage  across  the RESET2 and  PGND PCB pads is 3.3V.
- 17) Turn on the electronic load.
- 18) Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 1.8V ±3%.

19) T��������������

20) T������������

.

<!-- image -->

Evaluates: MAX20416

## MAX20416 Evaluation Kit

## Detailed Description

The MAX20416 EV kit integrates two high-efficiency, lowvoltage  DC-DC  converters  (OUT1,  OUT2)  that  provide adjustable output voltages from 0.8V to 3.8V at up to 3A.

VOUT1 and V OUT2  can be enabled/disabled by EN1, and EN2  jumpers respectively. The status of input voltage and  output  voltages  can  be  indicated  by RESET1 and RESET2 .

## Adjustable Buck Output Voltage (VOUT1 and VOUT2 )

The buck outputs (V OUT1  and V OUT2 ) can be adjustable using the following procedure:

- 1) Choose R BOTTOM  to be 100kΩ or less.
- 2) Solve for R TOP  using: RTOP = R BOTTOM  x [(V OUT\_ /0.8V) - 1]
- 3) Install resistors R TOP  and R BOTTOM . R TOP  refers to R4/R6, while R BOTTOM  refers to R3/R5 in the EV kit schematic.

## Operation Mode

The EV kit features a jumper (SYNC1) to configure the IC's operation mode. Install a shunt on SYNC1 to enter FPWM mode. Remove the shunt on SYNC1 to enable skip mode under light-load conditions. Connect an external clock with frequency in the range of 1.8MHz to 2.6MHz to synchronize the internal oscillator to an external clock. Table 1 summarizes the functions of SYNC1.

Evaluates: MAX20416

## Enable Control Inputs (EN1, EN2)

The EN1 and EN2 jumpers are used to enable or disable VOUT1  and V OUT2 ,  respectively.  Install  shunts  on  EN1, or EN2  to  enable  V OUT1 , or V OUT2 normal  operation. Remove shunts on EN1 or EN2 to enter shutdown mode. See Table 2 for enable control

## Reset Outputs ( RESET1 , RESET2 )

VSUP

The  EV  kits  also  include  two RESET\_ outputs  to  monitor the V OUT1  and V OUT2  output status. The RESET\_ output becomes high impedance and is pulled to the voltage  when  the  corresponding  output  voltage  is  within the  ����� undervoltage/overvoltage  (UV/OV)  range. RESET\_ goes low when the corresponding output voltage is not within the ����� UV/OV range.

## Table 1. Operation Mode (SYNC1)

| SHUNT POSITION   | MODE                                           |
|------------------|------------------------------------------------|
| On               | FPWM                                           |
| �                | Skip                                           |
| SYNC1 PCB pad)   | ���������������� Synchronize to external clock |

## Table 2. Enable Control (EN1, EN2)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| ON               | Normal Operation |
| OFF              | Shutdown         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20416EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20416 EV Kit Bill of Materials

| DESIGNATION          |   QTY | DESCRIPTION                                                     |
|----------------------|-------|-----------------------------------------------------------------|
| C2, C3               |     2 | 47µF 4V X6S Ceramic Capacitor (0805) Murata GRT21BC80G476ME13L  |
| C4                   |     1 | 47µF 16V Aluminum Capacitor Panasonic EEEFC1C470P               |
| C5, C6               |     2 | 4.7µF 16V X7R Ceramic Capacitor (1206) TDK CGA5L3X7R1C475K160AB |
| C7                   |     1 | 1µF 16V X7R Ceramic Capacitor (0603) TDK C1608X7R1C105K080AC    |
| C9                   |     1 | 8pF 50V C0G Ceramic Capacitor (0603) TDK CGA3E2C0G1H080D080AA   |
| C10, C14             |     0 | Not Installed (0805)                                            |
| C12                  |     1 | 0Ω 1% Resistor (0603)                                           |
| C13                  |     1 | 18pF 50V COG Ceramic Capacitor (0603) TDK CGA3E2C0G1H180J080AA  |
| EN1, EN2, SYNC1, WDS |     4 | 2-Pin Header 0.1' Sullins: PEC36SAAN or Equivalent              |
| L2, L3               |     2 | 0.47µH Inductor TDK TFM252010ALMBR47MTAA                        |
| R1                   |     1 | 10Ω 1% Resistor (0603)                                          |
| R2                   |     1 | 11.3kΩ 1% Resistor (0603)                                       |
| R3, R5, R9, R10      |     4 | 20kΩ 1% Resistor (0603)                                         |
| R4, R7, R12          |     3 | 0Ω 1% Resistor (0603)                                           |
|                      |       | 24.9kΩ 1% Resistor                                              |
| R6                   |     1 | (0603)                                                          |
|                      |     1 | 2.2MHz Sync Boost and Dual Step-Down Converter PMIC             |
| U1                   |       | Maxim MAX20416ATGA/V+ (TQFN 4mm×4mm×0.75mm) Shunt, 2 POSITION   |
| -                    |     4 | Sullins: STC02SYAN or Equivalent                                |
| -                    |     1 | PCB: MAX20416 EVKIT                                             |

Evaluates: MAX20416

## MAX20416 EV Kit Schematic

<!-- image -->

Evaluates: MAX20416

## MAX20416 EV Kit PCB Layouts

MAX20416 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

## MAX20416 EV Kit PCB Layouts (continued)

MAX20416 EV Kit PCB Layout -Top Layer

<!-- image -->

## MAX20416 EV Kit PCB Layouts (continued)

MAX20416 EV Kit PCB Layout -Internal Layer 2

<!-- image -->

## MAX20416 EV Kit PCB Layouts (continued)

<!-- image -->

MAX20416 EV Kit PCB Layout -Internal Layer 3

## MAX20416 EV Kit PCB Layouts (continued)

MAX20416 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/17            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20416