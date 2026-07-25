<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5976B Evaluation Kit

## General Description

## Features

The MAX5976B evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX5976B  hot-swap  controller with an integrated 7A MOSFET. The EV kit is configured to pass 7A into a 2.7V to 18V hot-swap application, thus providing a fully integrated solution. The EV kit uses the MAX5976BETE+ in a 5mm x 5mm x 0.8mm, 16-pin TQFN package on a proven four-layer PCB design.

The EV kit can also be used to evaluate the MAX5976A after IC replacement of U1.

- S 2.7V to 18V Operating-Voltage Range
- S Up to 7A Configurable Load-Current Capability
- S Banana Jacks for Input and Output Voltage
- S Selectable/Configurable Circuit-Breaker Threshold
- S Selectable/Configurable Undervoltage Lockout
- S Fault and Power-Good LED Indicators
- S Slide Switches and Input Pads for Enable Inputs
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5976BEVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION     |   QTY | DESCRIPTION                                                          |
|-----------------|-------|----------------------------------------------------------------------|
| C1              |     1 | 1µF Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E105K    |
| C2, C3, C4      |     3 | 10µF Q 20%, 25V X5R ceramic capacitors (1206) Murata GRM31CR61E106M  |
| C5              |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K |
| C6              |     0 | Not installed, capacitor (1206)                                      |
| D1              |     1 | 18V, 600W transient voltage suppressor (SMB) Fairchild SMBJ18A       |
| D2              |     1 | 20V, 1A Schottky rectifier (SMA) Fairchild SS12                      |
| D3              |     1 | 5.1V, 250mA zener diode (SOT23) Fairchild BZX84C5V1                  |
| D4              |     1 | Green LED (1206)                                                     |
| D5              |     1 | Red LED (1206)                                                       |
| FAULT , PG, REG |     3 | Test points, white                                                   |
| GND             |     2 | Test points, black                                                   |

| DESIGNATION         |   QTY | DESCRIPTION                                              |
|---------------------|-------|----------------------------------------------------------|
| GND (x2), VIN, VOUT |     4 | Uninsulated banana jacks, panel mount                    |
| JU1                 |     1 | 3-pin header                                             |
| JU2                 |     1 | 2-pin header                                             |
| N1                  |     1 | 60V, 115mA n-channel MOSFET (SOT23) Fairchild 2N7002     |
| P1                  |     1 | -60V, -0.18A, p-channel MOSFET (SOT23) Fairchild NDS0605 |
| R1-R5               |     5 | 100k I Q 5% resistors (0603)                             |
| R6, R7              |     2 | 1k I Q 5% resistors (0805)                               |
| R8                  |     1 | 40.2k I Q 1% resistor (0805)                             |
| R9                  |     1 | 50k I SMT cermet trimmer                                 |
| R10                 |     0 | Not installed, resistor (0603)                           |
| SW1, SW2, SW3       |     3 | SPDT slide switches, 2.5mm centers                       |
| U1                  |     1 | Hot-swap controller (16 TQFN-EP*) Maxim MAX5976BETE+     |
| -                   |     2 | Shunts                                                   |
| -                   |     1 | PCB: MAX5976B EVALUATION KIT+                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5976B Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX5976B when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX5976B	EV	kit
- 12V,	10A	DC	power	supply
- Voltmeter

## Table 1. Default Shunt Positions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | MAX5976B PIN                     | EV KIT FUNCTION                                 |
|----------|------------------|----------------------------------|-------------------------------------------------|
| JU1      | 1-2              | CB to GND (through resistor R8)  | Current limit is set to 7A.                     |
| JU2      | Installed        | ON1 to VIN (through resistor R1) | Undervoltage- lockout threshold is set to 2.5V. |

## Table 2. Default Switch Positions (SW1, SW2, SW3)

| SWITCH   | SWITCH POSITION   | MAX5976B PIN                                      | EV KIT OUTPUT   |
|----------|-------------------|---------------------------------------------------|-----------------|
| SW1      | 1-2               | ON1 to VIN (through resis- tor R1 and jumper JU2) | Enabled         |
| SW2      | 2-3               | ON2 to GND                                        | Enabled         |
| SW3      | 2-3               | PRESDET to GND                                    | Enabled         |

## Jumper Selection

## Circuit Breaker (CB)

Jumper JU1 sets the current limit for the internal circuit breaker (CB) of the device. The CB pin can be connected to a fixed resistor (R8) or a potentiometer (R9) to set the current limit. See Table 3 for shunt positions.

## Undervoltage Lockout (ON1)

The EV kit provides an option to configure the undervoltage-lockout threshold. The undervoltage-lockout threshold for the device is configured by the VIN voltage level divided by  R1  and  R10  at  the  ON1  pin.  Set  slide  switch  SW1  to position  1-2  before  configuring  the  undervoltage-lockout threshold. See Table 4 for JU2 shunt positions.

## Slide Switches

## Active-High Enable (ON1)

Slide  switch  SW1  controls  the  active-high  enable  pin (ON1) on the device. See Table 5 for switch positions.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Verify that shunts are installed in their default position for jumpers JU1 and JU2, as shown in Table 1.
- 2)  Verify that slide switches SW1, SW2, and SW3 are set in their default position, as shown in Table 2.
- 3)  Turn on the power supply and set the supply to 12V, then disable the power supply.
- 4)  Connect the positive terminal of the power supply to the VIN banana jack on the EV kit. Connect the negative terminal of the power supply to the GND banana jack.
- 5)  Enable the power supply.
- 6)  Verify  that  the  voltage  between  the  OUT  and  GND banana jacks is 12V.
- 7)  Verify that the voltage at the internal regulator voltage test point (REG) is 2.6V.
- 8)  The EV kit is now ready for additional evaluation.

## Detailed Description of Hardware

The  MAX5976B  EV  kit  provides  a  proven  design  to evaluate  the  MAX5976B  hot-swap  controller  with  an integrated 7A MOSFET. The EV kit can be conveniently connected  between  the  system  power  and  the  load using the banana jacks provided for the input and output voltage. PCB pads are provided to monitor and control the  device  signals.  The  EV  kit  operates  between  2.7V and 18V with up to 7A load-current capability.

## Evaluating the MAX5976A

The EV kit can also be used to evaluate the MAX5976A after IC replacement of U1 with the MAX5976AETE+. The MAX5976A is pin-to-pin compatible with the MAX5976B. Refer  to  the  MAX5976A/MAX5976B  IC  data  sheet  for details on the MAX5976A.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. JU1 Jumper Selection (CB)

| SHUNT POSITION   | CB PIN CONNECTED TO   | CURRENT LIMIT                             |
|------------------|-----------------------|-------------------------------------------|
| 1-2*             | R8                    | 7A                                        |
| 2-3              | R9                    | LIMIT 0.175 I R9 1000 A = × Ω       |
| Not installed    | Not connected         | Not allowed                               |

## Table 4. JU2 Jumper Selection (ON1)

| SHUNT POSITION   | ON1 PIN CONNECTED TO                                                                                                                                                            | UNDERVOLTAGE-LOCKOUT THRESHOLD                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Installed*       | VIN (through jumper JU2 and resistor-dividers R1 and R10). Note: Set SW1 to pins 1-2 before installing a shunt on JU2.                                                          | V UVLO = 2.5V where: R10 = open* where: R1 = 100k I R10 = 7.5k I to 86.6k I UVLO R1 V 1 1.21V R10   = + ×     |
| Not installed    | External voltage signal is connected to the ON1 PCB pad. Note: Set SW1 to pins 1-2 and remove the shunt on JU2 before connecting an external voltage signal to the ON1 PCB pad. | Enabled: • V ON1 > 1.21V • VIN > V UVLO • ON2 asserted low • PRESDET asserted low                                   |
| Not installed    | External voltage signal is connected to the ON1 PCB pad. Note: Set SW1 to pins 1-2 and remove the shunt on JU2 before connecting an external voltage signal to the ON1 PCB pad. | Disabled: • V ON1 < 1.21V                                                                                           |

## Table 5. SW1 Switch Positions (ON1)

| SWITCH POSITION   | ON1 PIN CONNECTED TO                                                                           | EV KIT FUNCTION                                                                   |
|-------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| 1-2*              | VIN (through resistor R1 and jumper JU2). Note: Install a shunt on jumper JU2.                 | Enabled: • VIN > V UVLO • ON2 asserted low • PRESDET asserted low                 |
| 1-2*              | External voltage signal is connected to the ON1 PCB pad. Note: Remove the shunt on jumper JU2. | Enabled: • V ON1 > 1.21V • VIN > V UVLO • ON2 asserted low • PRESDET asserted low |
| 1-2*              | External voltage signal is connected to the ON1 PCB pad. Note: Remove the shunt on jumper JU2. | Disabled: • V ON1 < 1.21V                                                         |
| 2-3               | GND                                                                                            | Disabled                                                                          |

<!-- image -->

## MAX5976B Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX5976B Evaluation Kit

## Active-Low Enable ( ON2 )

Slide  switch  SW2  controls  the  active-low  enable  pin ( ON2 ) on the device. See Table 6 for switch positions.

## Table 6. SW2 Switch Positions ( ON2 )

| SWITCH POSITION   | ON2 PIN CONNECTED TO                                                                   | EV KIT FUNCTION                                                   |
|-------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| 1-2               | VIN (through pullup resistor R2). External TTL signal is connected to the ON2 PCB pad. | Disabled Disabled:                                                |
| 1-2               | VIN (through pullup resistor R2). External TTL signal is connected to the ON2 PCB pad. | • TTL logic-high                                                  |
| 2-3*              | GND                                                                                    | Enabled • VIN > V UVLO • ON1 asserted high • PRESDET asserted low |

## Table 7. SW3 Switch Positions ( PRESDET )

| SWITCH POSITION   | PRESDET PIN CONNECTED TO                                                                   | EV KIT FUNCTION                                                        |
|-------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 1-2               | VIN (through pullup resistor R3). External TTL signal is connected to the PRESDET PCB pad. | Disabled Disabled: • TTL logic-high Enabled: • TTL logic-low • VIN > V |
| 2-3*              | GND                                                                                        | Enabled: • VIN > V UVLO • ON1 asserted high • ON2 asserted low         |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Present Detect ( PRESDET )

Slide switch SW3 controls the present-detect pin ( PRESDET ) on the device. See Table 7 for switch positions.

<!-- image -->

## MAX5976B Evaluation Kit

Figure 1. MAX5976B EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX5976B Evaluation Kit

<!-- image -->

Figure 2. MAX5976B EV Kit Component Placement GuideComponent Side

Figure 3. MAX5976B EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5976B EV Kit PCB Layout-GND Layer 2

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5976B Evaluation Kit

Figure 5. MAX5976B EV Kit PCB Layout-PWR Layer 3

<!-- image -->

<!-- image -->

Figure 6. MAX5976B EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX5976B Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

8

<!-- image -->