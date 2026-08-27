<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX14508E Evaluation Kit

## General Description

The MAX14508E evaluation kit (EV kit) provides a proven design to evaluate the MAX14508E high-ESDprotected double-pole/double-throw (DPDT) switch. The EV kit is designed to demonstrate the MAX14508E used in USB 2.0 Hi-Speed-compliant switching applications.  The  EV  kit  routes  a  multiplexed  signal  from  one USB port to another USB port or an audio connector.

The MAX14508E EV kit PCB comes with a MAX14508EEVB+ installed.  Contact the factory for free samples of the pin-compatible MAX14509EEVB+, MAX14510EEVB+, MAX14511EEVB+, or MAX14509AEEVB+ devices.

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1, C4, C5    |     3 | 10µF ±10%, 16V X7R ceramic capacitors (1206) Murata GRM31CR71C106K         |
| C2, C3        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K        |
| C6            |     1 | 0.01µF±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103K         |
| C7, C8        |     2 | 220µF±10%, 6.3V low-ESR tantalum capacitors (D size) KEMET B45197A1227K409 |
| C9            |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K           |
| D1            |     1 | Red LED (0603)                                                             |
| FB1           |     1 | 220 Ω at 100MHz, 200mA ferrite bead (0603) Murata BLM18AG221SN1D           |

Features

- ♦ USB Powered (Cable Included)
- ♦ Complete USB 2.0 Hi-Speed (480Mbps) Switching Circuit
- ♦ Lead-Free and RoHS Compliant
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14508EEVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| J1            |     1 | Mini USB type-AB right angle receptacle                  |
| J2            |     1 | USB type-B right-angle receptacle                        |
| J3            |     1 | Stereo headphone jack (3.5mm)                            |
| JU1-JU4       |     4 | 3-pin headers                                            |
| R1            |     1 | 270 Ω ±5% resistor (0603)                                |
| R2            |     0 | Not installed, resistor (0603)                           |
| U1            |     1 | DPDT USB 2.0 switch (10 UTQFN) Maxim MAX14508EEVB+       |
| U2            |     1 | 3V LDO regulator (5 SC70) Maxim MAX8510EXK30+            |
| -             |     4 | Shunts                                                   |
| -             |     1 | USB Hi-Speed A-to-B cable, 6ft                           |
| -             |     1 | USB type-A female-to-mini USB type- B 5-pin male adapter |
| -             |     1 | Stereo 3.5mm male-to-male adapter                        |
| -             |     1 | PCB: MAX14508E Evaluation Kit+                           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| KEMET Corp.                            | 864-963-6300 | www.kemet.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX14508E, MAX14509E, MAX14510E, MAX14511E, or MAX14509AE when contacting these component suppliers.

1

## MAX14508E Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX14508E EV kit (A USB cable, a USB type-A female-to-mini USB type-B 5-pin male adapter, and a stereo 3.5mm male-to-male adapter are included)
- One user-supplied Windows ® 2000/XP/Vista ® -compatible PC with a spare Hi-Speed USB port
- One USB 2.0 Hi-Speed/full-speed peripheral device (e.g., USB 2.0 flash drive)
- One stereo audio source (e.g., MP3 player)
- One pair of stereo headphones with a 3.5mm male connector

## Procedure

The MAX14508E EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers (JU1-JU4) are in their default positions, as shown in Table 1.
- 2) Connect the USB cable from the PC to the type-B USB port (J2) on the EV kit.
- 3) Connect the USB 2.0 device to J1 on the EV kit through a USB type-A female-to-mini USB type-B 5pin male adapter if needed.
- 4) Verify  that  the  USB  2.0  device  is  detected  by  the PC.
- 5) Remove the USB 2.0 device from J1.
- 6) Apply the stereo audio source outputs on J1 (pins 2-3). Connect the ground loop of the audio source to J1 (pin 4).
- 7) Connect the stereo headphones to J3 on the EV kit.
- 8) Place a shunt on JU3 across pins 1-2.
- 9) Verify that audio is output on the headphones.

## Table 1. Default Shunt Positions

| JUMPER   | SHUNT POSITION   |
|----------|------------------|
| JU1      | 1-2              |
| JU2      | 1-2              |
| JU3      | 2-3              |
| JU4      | 1-2              |

## Detailed Description of Hardware

The MAX14508E EV kit provides a proven layout for the MAX14508E and demonstrates the devices used in USB 2.0 Hi-Speed switching applications. The EV kit provides one mini type-AB (J1) and one type-B (J2) USB port. The EV kit also provides one stereo audio input/output connector (J3).

The MAX14508E routes multiplexed signals from the mini type-AB USB port to the type-B USB port or the audio connector, depending on the setting of the CB pin. All signal traces in the USB application circuit are 90 Ω differential controlled impedance traces.

## Power Supplies

The EV kit is powered from the type-B USB port (J2) by default.  Jumper JU1 selects the power supply for the MAX14508E (VCC), either from an on-board regulated 3V supply or an external supply. See Table 2 for jumper JU1 description. Jumper JU2 selects the power supply for  the  mini  type-AB  USB  port,  either  from  the  type-B USB port bus power or an external supply. See Table 3 for JU2 description.

## Table 2. Jumper JU1 Description

| SHUNT POSITION   | VCC SUPPLY      | DESCRIPTION                                                                                    |
|------------------|-----------------|------------------------------------------------------------------------------------------------|
| 1-2*             | On-board supply | Device powered by on-board linear regulator (3V)                                               |
| 2-3              | External supply | Device powered by user- supplied 2.7V to 5V power supply connected to the EXT_VCC and GND pads |

## Table 3. Jumper JU2 Description

| SHUNT POSITION   | MINI TYPE-AB USB PORT BUS POWER   | DESCRIPTION                                                                                         |
|------------------|-----------------------------------|-----------------------------------------------------------------------------------------------------|
| 1-2*             | On-board Supply                   | Mini type-AB USB port powered by type-B USB port                                                    |
| 2-3              | External Supply                   | Mini type-AB USB port powered by user-supplied 5V power supply connected to the EXT_5V and GND pads |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14508E Evaluation Kit

## USB Switch Control (CB/AOR)

The multiplexed signals from the mini type-AB USB port are routed to the type-B USB port or the audio connector,  depending on the state of the DPDT switch. The DPDT switch is controlled through pin 8 (CB for the MAX14508E, MAX14509E, and MAX14509AE; AOR for the MAX14510E and MAX14511E). Jumper JU3 sets the logic of pin 8. See Table 4 for JU3 description.

## Table 4. Jumper JU3 Description

| SHUNT POSITION   | CB/AOR PIN       | DESCRIPTION                                                                                                                                     |
|------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | Connected to VCC | For MAX14508E/MAX14509E/MAX14509AE: Drive CB high to connect COM_ to ANO_. For MAX14510E/MAX14511E: Drive AOR high to connect COM_ to ANO_.     |
| 2-3*             | Connected to GND | For MAX14508E/MAX14509E/MAX14509AE: Drive CB low to connect COM_ to UNC_. For MAX14510E/MAX14511E: Drive AOR low to have VB control the switch. |

## Table 5. Jumper JU4 Description

| SHUNT POSITION   | EN/VB PIN            | DESCRIPTION                                                                                                    |
|------------------|----------------------|----------------------------------------------------------------------------------------------------------------|
| 1-2*             | EN connected to VCC  | For MAX14508E/MAX14509E/MAX14509AE: Drive EN high for normal operation.                                        |
| 2-3              | EN connected to GND  | For MAX14508E/MAX14509E/MAX14509AE: Drive EN low to put switches in high impedance.                            |
| Open             | VB connected to VBUS | For MAX14510E/MAX14511E: Remove the shunt on JU4 and install a 0 Ω resistor on R2 to connect VB to VBUS of J2. |

<!-- image -->

## Device Enable (EN) and VBUS Detection (VB)

The  MAX14508E/MAX14509E/MAX14509AE  are enabled/disabled by the logic setting of EN (pin 9). For the MAX14510E and MAX14511E, pin 9 is used as a VBUS detection input (VB). See Table 5 for JU4 description.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14508E Evaluation Kit

Figure 1. MAX14508E EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14508E Evaluation Kit

<!-- image -->

Figure 2. MAX14508E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14508E EV Kit PCB Layout-Component Side

Figure 4. MAX14508E EV Kit PCB Layout-Inner Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14508E Evaluation Kit

Figure 5. MAX14508E EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 6. MAX14508E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_