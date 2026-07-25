<!-- lastmod 2022-08-02 -->
## MAX14630 Evaluation Kit

## General Description

The MAX14630 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality  of  the  MAX14630/MAX14632  USB  charger  adapter identification devices in a 5-pin TSOT package. The EV kit features a jumper for configuration and evaluation of both Autodetection 2A and Samsung (SS) 2A charging modes on the MAX14630, or Autodetection 2A and Autodetection 1A modes on the MAX14632. Input power to the EV kit is provided by a standard 5V USB bus or an external 5V power supply.

## Component List

| DESIGNATION   | QTY   | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1-C3         | 3     | 47µF ±10%, 10V X5R ceramic capacitors (1210) Murata GRM32ER61A476K |
| C4            | 1     | 0.1µF ±10%, 10V X7R ceramic capacitor (0603) AVX 0603ZC104KAT      |
| C5, C6        | 2     | 1µF, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K          |
| H5-H8         | 4 4   | 6-32 steel screws, 5/16in long 6-32 FF aluminum spacers, 1/2in     |
| J1            | 1     | USB type-A, right-angle receptacle Molex 67643-3911                |
| J2            | 1     | USB type-B, right-angle receptacle Molex 67068-9000                |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avx.com                 |
| Lite-On, Inc.                          | 408-946-4873 | www.us.liteon.com           |
| Molex                                  | 800-786-6539 | www.molex.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX14630 when contacting these component suppliers.

Evaluates: MAX14630/MAX14632

## Features

- Proven	PCB	Layout
- Fully	Assembled	and	Tested

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                      |
|---------------|-------|--------------------------------------------------------------------------------------------------|
| J3            |     1 | 3-pin header, 0.1in centers                                                                      |
| JP1, JP2      |     2 | 2-pin headers, 0.1in centers                                                                     |
| LED1          |     1 | Red LED (0805) Lite-On LTST-C170CKT                                                              |
| R1            |     1 | 1kΩ ±1% resistor (0805)                                                                          |
| R2            |     1 | 100kΩ ±1% resistor (0805)                                                                        |
| R3            |     1 | Not installed, 0Ω resistor (0805)                                                                |
| TP1, TP3, TP5 |     0 | Red test points                                                                                  |
| TP2, TP4, TP6 |     3 | Black test points                                                                                |
| TP7           |     1 | White test point                                                                                 |
| U1*           |     1 | USB charger adapter emulator for dedicated chargers (5 TSOT) Maxim MAX14630EZK+ (Top Mark: ADSM) |
| -             |     3 | Shunts                                                                                           |
| -             |     1 | PCB: MAX14630 EVALUATION KIT                                                                     |

<!-- image -->

## Quick Start

## Required Equipment

- MAX14630	EV	kit
- USB	port	or	5V,	2.1A	power	supply
- Apple, Samsung, or USB battery charger (BC)-compliant	device

## Procedure

The	EV	kit	is	fully	assembled	and	tested.	Follow	the	steps below to verify board operation:

- 1)  Verify that a shunt is installed across pins 2-3 on jumper J3 (supply is provided by USB type-B receptacle, J2) and	 that	 a	 shunt	 is	 installed	 across	 pins	 1-2	 of	 JP2 (places the device in Autodetection 2A mode).
- 2)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper	JP1	(connects	capacitors	to	output	to	prevent sagging of the supply when a device is plugged in).
- 3)  Connect	 the	 USB	 power	 supply	 to	 the	 EV	 kit's	 J2 receptacle.
- 4)  Verify	that	the	red	LED	(LED1)	is	lit	indicating	that	the part is powered.
- 5)  Plug	 in	 an	 Apple	 or	 USB	 BC-compliant	 device	 and verify that the device is charging.
- 6)  If  evaluation  of  a  Samsung  device  is  desired,  verify that	a	shunt	is	installed	across	pins	1-2	on	jumper	JP2 (places the device in SS 2A mode).

If evaluation of the MAX14632 is desired, solder that part in place of U1, then follow the steps below to verify board operation:

- 1)  Verify  that  a  shunt  is  installed  across  pins  2-3  on jumper J3 (supply is provided by USB type-B receptacle, J2) and that no shunt is installed across pins 1-2 on	JP2	(places the device in Autodetection 2A mode).
- 2)  Verify  that  a  shunt  is  installed  across  pins  1-2  on jumper	JP1	(connects	capacitors	to	output	to	prevent sagging of the supply when a device is plugged in).
- 3)  Connect	the	USB	power	supply	to	EV	kit's	J2	recep -tacle.
- 4)  Verify	that	the	red	LED	(LED1)	is	lit	indicating	that	the part is powered.
- 5)  Plug	 in	 an	 Apple	 or	 USB	 BC-compliant	 device	 and verify that the device is charging.
- 6)  If  evaluation  of  Autodetection  1A  mode  is  desired, verify that a shunt is installed across pins 1-2 on jumper	JP2	(places the device in Autodetection 1A mode).

## Detailed Description of Hardware

The  MAX14630  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  functionality  of  the MAX14630/MAX14632  USB  charger  adapter  identification  devices  in  a  5-pin  TSOT  package.  The  EV  kit  features  a  jumper  for  configuration  and  evaluation  of  both Autodetection 2A and Samsung (SS) 2A charging modes on the MAX14630, or Autodetection 2A and Autodetection 1A modes on the MAX14632. Input power to the EV kit is provided by a standard 5V USB bus or an external 5V power supply. Included with the EV kit is a USB type-A male to USB type-B male cable, providing a convenient way to power the EV kit. Input power can also be supplied by	a	4.5V	to	5.5V	external	DC	source.

Capacitors	C1-C3	provide	a	bulk	capacitance	to	prevent voltage	sagging	during	a	plug-in	event.	The	EV	kit's	PCB is designed with 1oz copper.

## Power Supply

The EV kit is powered by a user-supplied USB port at J2 or	 by	 a	 4.5V	 to	 5.5V,	 2.1A	 DC	 power	supply	connected between  V EXT and	 GND.	 Jumper	 J3's	 position	 selects the power source. With a shunt shorting pins 1-2 on J3, the EV kit is powered at V EXT , while a shunt shorting pins 2-3 means that the EV kit is powered at the USB type-B receptacle. See Table 1 for jumper settings.

## Reservoir Capacitors

The	EV	kit	features	 a	 jumper	 (JP1)	 for	 connecting	 bulk capacitance to the V BUS  line to prevent voltage sagging during	a	plug-in	event.	Simply	remove	the	shunt	from	JP1 to  disconnect  the  bulk  capacitance  from  the  V BUS   line. See Table 1 for jumper settings.

## Charger Adapter Identification Modes

The EV kit features a jumper to change the MAX14630 between  Autodetection  2A  mode  and  SS  2A  mode,  or the  MAX14632  between  Autodetection  1A  mode  and Autodetection  2A  mode.  Install  a  shunt  across  pins  1-2 on	jumper	JP2	to	place	the	MAX14630	in	Autodetection 2A  mode  or  to  place  the  MAX14632  in  Autodetection 1A	 mode.	 Leave	 pins	 1-2	 of	 JP2	 open	 circuit	 to	 put the  MAX14630  in  SS  2A  mode  or  the  MAX14632  in Autodetection 2A mode. See Table 1 for jumper settings.

Table 1. Jumper Settings (J3, JP1, JP2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                               |
|----------|------------------|-----------------------------------------------------------|
|          | 1-2              | Power is supplied at V EXT .                              |
|          | 2-3*             | Power is supplied through the USB type-B receptacle (J2). |
|          | Open*            | Reservoir capacitors are unconnected from V BUS .         |
|          | 1-2              | Reservoir capacitors are connected to V BUS .             |
|          | Open             | Places the MAX14630 in SS 2A mode.                        |
|          | 1-2*             | Places the MAX14630 in Autodetection 2A mode.             |
|          | Open             | Places the MAX14632 in Autodetection 2A mode.             |
|          | 1-2              | Places the MAX14632 in Autodetection 1A mode.             |

│

Figure 1. MAX14630 EV Kit Schematic

<!-- image -->

Figure 2. MAX14630 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX14630 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 4. MAX14630 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX14630 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14630EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	speci¿cations	without	notice	at	any	time.

Evaluates: MAX14630/MAX14632