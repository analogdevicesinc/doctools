<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX34565 evaluation kit (EV kit) simplifies evaluation of  the  MAX34565  12V  hot-plug  switch.  The  EV  kit  is shipped with a 15 I current-limit resistor (R2) installed, but this value can be changed from 12 I to 30 I to match the application. The EV kit is also shipped with a Kelvin current-sense  arrangement,  but  this  can  be  changed to  a  direct  current-sense  arrangement  by  adding  a  0 I jumper in the R3 position.

Note: The  PCB  used  for  the  MAX34565  EV  kit  also supports the MAX34564. The two devices share the same footprint. The  PCB  silkscreen  shows  the  MAX34564, but if a white label exists on the top side of the PCB, the MAX34565, not the MAX34564, is mounted on the board.

## EV Kit Contents

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 0.1 F F, 25V X7R ceramic capacitor (0805) Venkel C0805X7R250-104KNE |
| C2            |     1 | 2.2 F F, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E225K     |
| C3            |     1 | 270pF X7R ceramic capacitor (0805) Venkel C0805X7R500-271KNE        |
| J1            |     1 | Red banana jack                                                     |
| J2            |     1 | Black banana jack                                                   |
| J3            |     1 | Blue banana jack                                                    |
| R1            |     1 | 0 I ± 1% resistor (0805) Venkel CR0805-10W-000T                     |
| R2            |     1 | 15 I ± 1% resistor (0805) Venkel CR0805-10W-15R0FT                  |
| R3            |     1 | Resistor, do not populate                                           |
| TP1-TP7       |     7 | Test points                                                         |
| U1            |     1 | 12V hot-plug switch (10 TDFN-EP*) Maxim MAX34565ETB+                |

## S MAX34565 EV Kit Board

## MAX34565 Evaluation Kit

## Evaluates: MAX34565

## Features

- S Quick Evaluation of the MAX34565
- S Fully Assembled and Tested
- S Ready for Operation Out of the Box
- S Adjustable Current Threshold
- S Supports Both Kelvin and Direct Current Sensing
- S Labeled Test Points for Key Signals
- S PCB Mounting Holes

## Equipment Needed

The following equipment is required to use the MAX34565 EV kit:

- 12V	(6A)	DC	power	supply
- Active	or	passive	power	load	capable	of	sinking	up to 6A

## MAX34565 Evaluation Kit

<!-- image -->

Ordering Information appears at end of data sheet.

## Getting Started

- Connect	a	high-power	12V	(6A)	DC	power	supply	to the	red	(+)	and	black	(-)	banana	jacks.	Do	not	apply power.
- Connect	a	variable	(0	to	6A)	load	between	the	blue	(+) and black (-) banana jacks.
- Set	the	load	to	sink	1A.
- Turn	on	the	12V	DC	power	supply.

## MAX34565 Evaluation Kit

## Evaluates: MAX34565

- Check	 the	 DC	 voltage	 drop	 from	 VCC	 to	 LOAD.	 It should be approximately 70mV.
- Decrease	the	variable	load	value	(increase	the	 cur -rent  flow)  until  current  stops  flowing.  The  trip  point should be approximately 4.5A.
- The	MAX34565	latches	off	and	VCC	must	be	powered cycled to reset the device.

Note: Use	 short	 leads	 to	 minimize	 inductance.	 Doing so helps protect the MAX34565 from being exposed to voltages greater that the maximum allowable.

Figure 1. MAX34565 EV Kit Schematic

<!-- image -->

Figure 2. MAX34564/MAX34565 EV Kit PCB Top

<!-- image -->

## MAX34565 Evaluation Kit Evaluates: MAX34565

Figure 3. MAX34564/MAX34565 EV Kit PCB Bottom

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34565EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Evaluates: MAX34565

## MAX34565 Evaluation Kit Evaluates: MAX34565

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.